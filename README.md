# Rosetta TypeScript Client

This package is for making queries to a Rosetta Node or a Rosetta-compliant service.
Read more about Rosetta at [rosetta-api.org](https://www.rosetta-api.org/)

All testnet calls are free. To increase your rate limit or make mainnet queries, get a key at [lunar.dev](https://lunar.dev).

All endpoints are Rosetta compliant. Read more about Rosetta at [rosetta-api.org](https://www.rosetta-api.org/)

## Installation

NPM
```
npm install @lunarhq/rosetta-ts-client
```

Yarn
```
yarn add @lunarhq/rosetta-ts-client
```

## Usage

Create a new client. Both `baseUrl` and `headers` are optional. If no `baseUrl` is provided, the client will use [lunar.dev](https://lunar.dev).
```ts
import { RosettaClient } from '@lunarhq/rosetta-ts-client';

const baseUrl = 'https://api.lunar.dev/v1/';
const headers = {
  'X-Api-Key': 'XXXXXXXXXX'
}
const client = new RosettaClient({baseUrl, headers});
```

### Data Endpoints
You can read more about the Rosetta Data API endpoints at [rosetta-api.org/docs/data_api_introduction.html](https://www.rosetta-api.org/docs/data_api_introduction.html)

[Network List](https://www.rosetta-api.org/docs/NetworkApi.html#networklist)
```
networksList(req: MetadataRequest): Promise<NetworkListResponse>
```

[Network Options](https://www.rosetta-api.org/docs/NetworkApi.html#networkoptions)
```
networkOptions(req: NetworkRequest): Promise<NetworkOptionsResponse>
```

[Network Status](https://www.rosetta-api.org/docs/NetworkApi.html#networkstatus)
```
networkOptions(req: NetworkRequest): Promise<NetworkOptionsResponse>
```

[Account Balance](https://www.rosetta-api.org/docs/AccountApi.html#accountbalance)
```
accountBalance(req: AccountBalanceRequest): Promise<AccountBalanceResponse>
```

[Account Coins](https://www.rosetta-api.org/docs/AccountApi.html#accountcoins)
```
accountCoins(req: AccountCoinsRequest): Promise<AccountCoinsResponse>
```

[Block](https://www.rosetta-api.org/docs/BlockApi.html#block)
```
block(req: BlockRequest): Promise<BlockResponse>
```

[Block Transaction](https://www.rosetta-api.org/docs/BlockApi.html#blocktransaction)
```
blockTransaction(req: BlockTransactionRequest): Promise<BlockTransactionResponse>
```

[Mempool](https://www.rosetta-api.org/docs/MempoolApi.html#mempool)
```
mempool(req: NetworkRequest): Promise<MempoolResponse>
```

[Mempool Transaction](https://www.rosetta-api.org/docs/MempoolApi.html#mempooltransaction)
```
mempoolTransaction(req: MempoolTransactionRequest): Promise<MempoolTransactionResponse>
```

### Construction Endpoints
Construction endpoints are used to write to a blockchain. You can read more about the Rosetta Construction API endpoints at [rosetta-api.org/docs/construction_api_introduction.html](https://www.rosetta-api.org/docs/construction_api_introduction.html)

[Combine](https://www.rosetta-api.org/docs/ConstructionApi.html#constructioncombine)
```
combine(req: ConstructionCombineRequest): Promise<ConstructionCombineResponse>
```

[Derive](https://www.rosetta-api.org/docs/ConstructionApi.html#constructionderive)
```
derive(req: ConstructionDeriveRequest): Promise<ConstructionDeriveResponse>
```

[Hash](https://www.rosetta-api.org/docs/ConstructionApi.html#constructionhash)
```
hash(req: ConstructionHashRequest): Promise<TransactionIdentifierResponse>
```

[Metadata](https://www.rosetta-api.org/docs/ConstructionApi.html#constructionmetadata)
```
metadata(req: rosetta.ConstructionMetadataRequest): Promise<rosetta.ConstructionMetadataResponse>
```

[Parse](https://www.rosetta-api.org/docs/ConstructionApi.html#constructionparse)
```
parse(req: rosetta.ConstructionParseRequest): Promise<rosetta.ConstructionParseResponse>
```

[Payloads](https://www.rosetta-api.org/docs/ConstructionApi.html#constructionpayloads)
```
payloads(req: rosetta.ConstructionPayloadsRequest): Promise<rosetta.ConstructionPayloadsResponse>
```

[Preprocess](https://www.rosetta-api.org/docs/ConstructionApi.html#constructionpreprocess)
```
preprocess(req: rosetta.ConstructionPreprocessRequest): Promise<rosetta.ConstructionPreprocessResponse>
```

[Submit](https://www.rosetta-api.org/docs/ConstructionApi.html#constructionsubmit)
```
submit(req: rosetta.ConstructionSubmitRequest): Promise<rosetta.TransactionIdentifierResponse>
```
