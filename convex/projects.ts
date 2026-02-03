import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get all projects
export const getAllProjects = query({
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});

// Get project by ID
export const getProjectById = query({
  args: { id: v.string() },
  handler: async (ctx, args) => {
    const project = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("id"), args.id))
      .first();
    
    return project;
  },
});

// Create project (for CMS)
export const createProject = mutation({
  args: {
    id: v.string(),
    media: v.object({
      type: v.string(),
      url: v.string(),
      thumbnail: v.string(),
    }),
    tags: v.array(v.string()),
    date: v.string(),
    url: v.string(),
    translations: v.object({
      en: v.object({
        title: v.string(),
        description: v.string(),
        content: v.string(),
      }),
      nl: v.object({
        title: v.string(),
        description: v.string(),
        content: v.string(),
      }),
    }),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("projects", args);
  },
});

// Update project
export const updateProject = mutation({
  args: {
    _id: v.id("projects"),
    media: v.optional(v.object({
      type: v.string(),
      url: v.string(),
      thumbnail: v.string(),
    })),
    tags: v.optional(v.array(v.string())),
    date: v.optional(v.string()),
    url: v.optional(v.string()),
    translations: v.optional(v.object({
      en: v.object({
        title: v.string(),
        description: v.string(),
        content: v.string(),
      }),
      nl: v.object({
        title: v.string(),
        description: v.string(),
        content: v.string(),
      }),
    })),
  },
  handler: async (ctx, args) => {
    const { _id, ...updates } = args;
    await ctx.db.patch(_id, updates);
  },
});

// Delete project
export const deleteProject = mutation({
  args: { _id: v.id("projects") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args._id);
  },
});
