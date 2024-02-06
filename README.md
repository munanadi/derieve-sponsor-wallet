### Edge function to derive sponsor wallet

API3 QRNG requires you to get yourself a sponsor wallet that will actually pay for the QRNG requests on chain.
Currently the suggested way is to run a local CLI command to get it working. Like descirbed [here](https://docs.api3.org/reference/airnode/latest/packages/admin-cli.html#derive-sponsor-wallet-address)

Wanted to get this over an endpoint and made the serverless function.

> Remember to watch out for the config change that will allow the project to build.

```js
export const config = {
  runtime: "edge",
  unstable_allowDynamic: ["/node_modules/.pnpm/lodash@4.17.21/**"],
};
```

```sh
POST <ENDPOINT_URL>/api/getSponsorWalletAddress
{
  "contractAddress" : "....",
  "airnodeAddress"  : "....",
  "airnodeXpub"     : "... "
}
```
