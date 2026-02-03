#!/usr/bin/env node

/**
 * Seed the production Convex database with projects.
 * Uses production URL so it doesn't overwrite dev data.
 *
 * Run: node scripts/seed-convex-prod.js
 */

require("dotenv").config({ path: ".env.local" });

const { ConvexHttpClient } = require("convex/browser");
const { api } = require("../convex/_generated/api");

// Production deployment URL
const convexUrl =
  process.env.NEXT_PUBLIC_CONVEX_URL_PROD ||
  "https://groovy-kookabura-568.convex.cloud";

const client = new ConvexHttpClient(convexUrl);

async function seed() {
  console.log("🌱 Seeding production Convex database...");
  console.log("   URL:", convexUrl, "\n");

  try {
    const result = await client.mutation(api.seedProjects.seedProjects);
    console.log("✅ Success:", result.message);
    console.log("\n🎉 Production CMS is ready!");
    console.log("   Dashboard: https://dashboard.convex.dev/d/groovy-kookabura-568");
  } catch (error) {
    console.error("❌ Error seeding production database:", error.message);
    process.exit(1);
  }
}

seed();
