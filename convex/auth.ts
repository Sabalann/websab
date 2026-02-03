import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Simple session store (in production, use a proper session table)
const sessions = new Map<string, { token: string; expiresAt: number }>();

// Login mutation - verifies password and returns session token
export const login = mutation({
  args: { password: v.string() },
  handler: async (ctx, args) => {
    // In production, compare with hashed password from env
    // For now, we'll use a simple comparison (replace with bcrypt in production)
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
    
    if (args.password !== adminPassword) {
      throw new Error("Invalid password");
    }
    
    // Generate session token
    const token = Math.random().toString(36).substring(2, 15) + 
                  Math.random().toString(36).substring(2, 15);
    
    // Store session (expires in 24 hours)
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000;
    
    // Store in database instead of memory for production
    await ctx.db.insert("sessions", {
      token,
      expiresAt,
      createdAt: Date.now(),
    });
    
    return { token, expiresAt };
  },
});

// Verify session token
export const verifySession = query({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("sessions")
      .filter((q) => q.eq(q.field("token"), args.token))
      .first();
    
    if (!session) {
      return { valid: false };
    }
    
    if (session.expiresAt < Date.now()) {
      // Session expired - will be cleaned up by logout mutation
      return { valid: false };
    }
    
    return { valid: true };
  },
});

// Logout mutation
export const logout = mutation({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("sessions")
      .filter((q) => q.eq(q.field("token"), args.token))
      .first();
    
    if (session) {
      await ctx.db.delete(session._id);
    }
    
    return { success: true };
  },
});

// Helper function to verify auth in mutations
export async function requireAuth(ctx: any, token: string) {
  const session = await ctx.db
    .query("sessions")
    .filter((q: any) => q.eq(q.field("token"), token))
    .first();
  
  if (!session || session.expiresAt < Date.now()) {
    throw new Error("Unauthorized");
  }
  
  return true;
}
