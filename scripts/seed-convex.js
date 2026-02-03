#!/usr/bin/env node

/**
 * Seed Convex database with projects
 * Run with: node scripts/seed-convex.js
 */

require('dotenv').config({ path: '.env.local' });

const { ConvexHttpClient } = require("convex/browser");
const { api } = require("../convex/_generated/api");

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
if (!convexUrl) {
  console.error("❌ NEXT_PUBLIC_CONVEX_URL not found in .env.local");
  process.exit(1);
}

const client = new ConvexHttpClient(convexUrl);

async function seed() {
  console.log("🌱 Seeding Convex database...");
  
  try {
    const result = await client.mutation(api.seedProjects.seedProjects);
    console.log("✅ Success:", result.message);
    const dashboardSlug = convexUrl.includes("groovy-kookabura")
      ? "groovy-kookabura-568"
      : "amiable-meadowlark-449";
    console.log("\n🎉 Your Convex CMS is ready!");
    console.log("📊 View dashboard:", `https://dashboard.convex.dev/d/${dashboardSlug}`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seed();
