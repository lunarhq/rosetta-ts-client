import * as rosetta from "./types/rosetta";
interface RosettaClientParams {
    baseUrl?: string;
    headers?: {
        [key: string]: string;
    };
}
export declare class RosettaClient {
    _baseUrl: string;
    _headers: {
        [key: string]: string;
    };
    constructor({ baseUrl, headers, }: RosettaClientParams);
    /**********************************************
     ** Data Endpoints
     **********************************************/
    accountBalance: (req: rosetta.AccountBalanceRequest) => Promise<rosetta.AccountBalanceResponse>;
    block: (req: rosetta.BlockRequest) => Promise<rosetta.BlockResponse>;
    blockTransaction: (req: rosetta.BlockTransactionRequest) => Promise<rosetta.BlockTransactionResponse>;
    networksList: (req: rosetta.MetadataRequest) => Promise<rosetta.NetworkListResponse>;
    networkOptions: (req: rosetta.NetworkRequest) => Promise<rosetta.NetworkOptionsResponse>;
    networkStatus: (req: rosetta.NetworkRequest) => Promise<rosetta.NetworkStatusResponse>;
    mempool: (req: rosetta.NetworkRequest) => Promise<rosetta.MempoolResponse>;
    mempoolTransaction: (req: rosetta.MempoolTransactionRequest) => Promise<rosetta.MempoolTransactionResponse>;
    /**********************************************
     ** Construction Endpoints
     **********************************************/
    combine: (req: rosetta.ConstructionCombineRequest) => Promise<rosetta.ConstructionCombineResponse>;
    derive: (req: rosetta.ConstructionDeriveRequest) => Promise<rosetta.ConstructionDeriveResponse>;
    hash: (req: rosetta.ConstructionHashRequest) => Promise<rosetta.TransactionIdentifierResponse>;
    metadata: (req: rosetta.ConstructionMetadataRequest) => Promise<rosetta.ConstructionMetadataResponse>;
    parse: (req: rosetta.ConstructionParseRequest) => Promise<rosetta.ConstructionParseResponse>;
    payloads: (req: rosetta.ConstructionPayloadsRequest) => Promise<rosetta.ConstructionPayloadsResponse>;
    preprocess: (req: rosetta.ConstructionPreprocessRequest) => Promise<rosetta.ConstructionPreprocessResponse>;
    submit: (req: rosetta.ConstructionSubmitRequest) => Promise<rosetta.TransactionIdentifierResponse>;
}
export {};
