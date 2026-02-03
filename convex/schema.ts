import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
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
  }).index("by_project_id", ["id"]),
  
  sessions: defineTable({
    token: v.string(),
    expiresAt: v.number(),
    createdAt: v.number(),
  }).index("by_token", ["token"]),
});
