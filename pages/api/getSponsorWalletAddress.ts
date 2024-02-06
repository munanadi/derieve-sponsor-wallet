import type { NextRequest } from "next/server";
import { deriveSponsorWalletAddress } from "@api3/airnode-admin";

// ------------------
// Using Crypto with Edge Middleware and Edge Functions
// ------------------

export const config = {
  runtime: "edge",
  unstable_allowDynamic: [
    "/node_modules/.pnpm/lodash@4.17.21/**"
  ]
};

export default async function handler(req: NextRequest) {
  const body = await req.json();

  const { airnodeAddress, airnodeXpub, contractAddress } = JSON.parse(
    JSON.stringify(body),
  );

  const sponsorWalletAddress = deriveSponsorWalletAddress(
    airnodeXpub,
    airnodeAddress,
    contractAddress,
  );

  return new Response(
    JSON.stringify({
      sponsorWalletAddress,
    }),
    { headers: { "Content-Type": "application/json" } },
  );
}
