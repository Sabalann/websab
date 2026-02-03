#!/usr/bin/env node

/**
 * Deploy Convex functions and schema to production.
 * Requires CONVEX_DEPLOY_KEY in .env.local (prod deploy key from Convex dashboard).
 *
 * Run: node scripts/deploy-convex-prod.js
 */

require("dotenv").config({ path: ".env.local" });

const { spawn } = require("child_process");

const deployKey = process.env.CONVEX_DEPLOY_KEY;
if (!deployKey) {
  console.error("❌ CONVEX_DEPLOY_KEY not found in .env.local");
  console.error("   Add: CONVEX_DEPLOY_KEY=prod:your-deployment|your-key");
  process.exit(1);
}

console.log("🚀 Deploying Convex to production...\n");

const child = spawn("npx", ["convex", "deploy", "--yes"], {
  env: { ...process.env, CONVEX_DEPLOY_KEY: deployKey },
  stdio: "inherit",
});

child.on("exit", (code) => {
  if (code === 0) {
    console.log("\n✅ Production deployment complete.");
    console.log("   Next: seed the production database with:");
    console.log("   NEXT_PUBLIC_CONVEX_URL=https://groovy-kookabura-568.convex.cloud node scripts/seed-convex.js");
  }
  process.exit(code ?? 0);
});
