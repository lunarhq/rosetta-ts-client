/**
 * The network_identifier specifies which network a particular object is associated with.
 */
export interface NetworkIdentifier {
  blockchain: string;
  /**
   * If a blockchain has a specific chain-id or network identifier, it should go in this field. It is up to the client to determine which network-specific identifier is mainnet or testnet.
   */
  network: string;
  sub_network_identifier?: SubNetworkIdentifier;
}

/**
 * In blockchains with sharded state, the SubNetworkIdentifier is required to query some object on a specific shard. This identifier is optional for all non-sharded blockchains.
 */
export interface SubNetworkIdentifier {
  network: string;
  metadata?: { [key: string]: any };
}

/**
 * The block_identifier uniquely identifies a block in a particular network.
 */
export interface BlockIdentifier {
  /**
   * This is also known as the block height.
   */
  index: number;
  hash: string;
}
/**
 * When fetching data by BlockIdentifier, it may be possible to only specify the index or hash. If neither property is specified, it is assumed that the client is making a request at the current block.
 */
export interface PartialBlockIdentifier {
  index?: number;
  hash?: string;
}

/**
 * The transaction_identifier uniquely identifies a transaction in a particular network and block or in the mempool.
 */
export interface TransactionIdentifier {
  /**
   * Any transactions that are attributable only to a block (ex: a block event) should use the hash of the block as the identifier.
   */
  hash: string;
}

/**
 * The operation_identifier uniquely identifies an operation within a transaction.
 */
export interface OperationIdentifier {
  /**
   * The operation index is used to ensure each operation has a unique identifier within a transaction. This index is only relative to the transaction and NOT GLOBAL. The operations in each transaction should start from index 0. To clarify, there may not be any notion of an operation index in the blockchain being described.
   */
  index: number;
  /**
   * Some blockchains specify an operation index that is essential for client use. For example, Bitcoin uses a network_index to identify which UTXO was used in a transaction. network_index should not be populated if there is no notion of an operation index in a blockchain (typically most account-based blockchains).
   */
  network_index?: number;
}

/**
 * The account_identifier uniquely identifies an account within a network. All fields in the account_identifier are utilized to determine this uniqueness (including the metadata field, if populated).
 */
export interface AccountIdentifier {
  /**
   * The address may be a cryptographic public key (or some encoding of it) or a provided username.
   */
  address: string;
  sub_account?: SubAccountIdentifier;
  /**
   * Blockchains that utilize a username model (where the address is not a derivative of a cryptographic public key) should specify the public key(s) owned by the address in metadata.
   */
  metadata?: { [key: string]: any };
}

/**
 * An account may have state specific to a contract address (ERC-20 token) and/or a stake (delegated balance). The sub_account_identifier should specify which state (if applicable) an account instantiation refers to.
 */
export interface SubAccountIdentifier {
  /**
   * The SubAccount address may be a cryptographic value or some other identifier (ex: bonded) that uniquely specifies a SubAccount.
   */
  address: string;
  /**
   * If the SubAccount address is not sufficient to uniquely specify a SubAccount, any other identifying information can be stored here. It is important to note that two SubAccounts with identical addresses but differing metadata will not be considered equal by clients.
   */
  metadata?: { [key: string]: any };
}

/**
 * Blocks contain an array of Transactions that occurred at a particular BlockIdentifier.
 */
export interface Block {
  block_identifier: BlockIdentifier;
  parent_block_identifier: BlockIdentifier;
  timestamp: Timestamp;
  transactions: Transaction[];
  metadata?: { [key: string]: any };
}

/**
 * Transactions contain an array of Operations that are attributable to the same TransactionIdentifier.
 */
export interface Transaction {
  transaction_identifier: TransactionIdentifier;
  operations: Operation[];
  /**
   * Transactions that are related to other transactions (like a cross-shard transaction) should include the tranaction_identifier of these transactions in the metadata.
   */
  metadata?: { [key: string]: any };
}

/**
 * Operations contain all balance-changing information within a transaction. They are always one-sided (only affect 1 AccountIdentifier) and can succeed or fail independently from a Transaction.
 */
export interface Operation {
  operation_identifier: OperationIdentifier;
  /**
   * Restrict referenced related_operations to identifier indexes < the current operation_identifier.index. This ensures there exists a clear DAG-structure of relations. Since operations are one-sided, one could imagine relating operations in a single transfer or linking operations in a call tree.
   */
  related_operations?: OperationIdentifier[];
  /**
   * The network-specific type of the operation. Ensure that any type that can be returned here is also specified in the NetworkStatus. This can be very useful to downstream consumers that parse all block data.
   */
  type: string;
  /**
   * The network-specific status of the operation. Status is not defined on the transaction object because blockchains with smart contracts may have transactions that partially apply. Blockchains with atomic transactions (all operations succeed or all operations fail) will have the same status for each operation.
   */
  status: string;
  account?: AccountIdentifier;
  amount?: Amount;
  metadata?: { [key: string]: any };
}

/**
 * Amount is some Value of a Currency. It is considered invalid to specify a Value without a Currency.
 */
export interface Amount {
  /**
   * Value of the transaction in atomic units represented as an arbitrary-sized signed integer. For example, 1 BTC would be represented by a value of 100000000.
   */
  value: string;
  currency: Currency;
  metadata?: { [key: string]: any };
}

/**
 * Currency is composed of a canonical Symbol and Decimals. This Decimals value is used to convert an Amount.Value from atomic units (Satoshis) to standard units (Bitcoins).
 */
export interface Currency {
  /**
   * Canonical symbol associated with a currency.
   */
  symbol: string;
  /**
   * Number of decimal places in the standard unit representation of the amount. For example, BTC has 8 decimals. Note that it is not possible to represent the value of some currency in atomic units that is not base 10.
   */
  decimals: number;
  /**
   * Any additional information related to the currency itself. For example, it would be useful to populate this object with the contract address of an ERC-20 token.
   */
  metadata?: { [key: string]: any };
}

/**
 * A Peer is a representation of a node's peer.
 */
export interface Peer { peer_id: string; metadata?: { [key: string]: any } }

/**
 * The Version object is utilized to inform the client of the versions of different components of the Rosetta implementation.
 */
export interface Version {
  /**
   * The rosetta_version is the version of the Rosetta interface the implementation adheres to. This can be useful for clients looking to reliably parse responses.
   */
  rosetta_version: string;
  /**
   * The node_version is the canonical version of the node runtime. This can help clients manage deployments.
   */
  node_version: string;
  /**
   * When a middleware server is used to adhere to the Rosetta interface, it should return its version here. This can help clients manage deployments.
   */
  middleware_version?: string;
  /**
   * Any other information that may be useful about versioning of dependent services should be returned here.
   */
  metadata?: { [key: string]: any };
}

/**
 * Allow specifies supported Operation status, Operation types, and all possible error statuses. This Allow object is used by clients to validate the correctness of a Rosetta Server implementation. It is expected that these clients will error if they receive some response that contains any of the above information that is not specified here.
 */
export interface Allow {
  /**
   * All Operation.Status this implementation supports. Any status that is returned during parsing that is not listed here will cause client validation to error.
   */
  operation_statuses: OperationStatus[];
  /**
   * All Operation.Type this implementation supports. Any type that is returned during parsing that is not listed here will cause client validation to error.
   */
  operation_types: string[];
  /**
   * All Errors that this implementation could return. Any error that is returned during parsing that is not listed here will cause client validation to error.
   */
  errors: Error[];
  /**
   * Any Rosetta implementation that supports querying the balance of an account at any height in the past should set this to true.
   */
  historical_balance_lookup: boolean;
}

/**
 * OperationStatus is utilized to indicate which Operation status are considered successful.
 */
export interface OperationStatus {
  /**
   * The status is the network-specific status of the operation.
   */
  status: string;
  /**
   * An Operation is considered successful if the Operation.Amount should affect the Operation.Account. Some blockchains (like Bitcoin) only include successful operations in blocks but other blockchains (like Ethereum) include unsuccessful operations that incur a fee. To reconcile the computed balance from the stream of Operations, it is critical to understand which Operation.Status indicate an Operation is successful and should affect an Account.
   */
  successful: boolean;
}

/**
 * The timestamp of the block in milliseconds since the Unix Epoch. The timestamp is stored in milliseconds because some blockchains produce blocks more often than once a second.
 */
export type Timestamp = number;
/**
 * PublicKey contains a public key byte array for a particular CurveType encoded in hex. Note that there is no PrivateKey struct as this is NEVER the concern of an implementation.
 */
export interface PublicKey {
  /**
   * Hex-encoded public key bytes in the format specified by the CurveType.
   */
  hex_bytes: string;
  curve_type: CurveType;
}

/**
 * CurveType is the type of cryptographic curve associated with a PublicKey.  * secp256k1: SEC compressed - `33 bytes` (https://secg.org/sec1-v2.pdf#subsubsection.2.3.3) * edwards25519: `y (255-bits) || x-sign-bit (1-bit)` - `32 bytes` (https://ed25519.cr.yp.to/ed25519-20110926.pdf)
 */
export type CurveType = "secp256k1" | "edwards25519";
/**
 * SigningPayload is signed by the client with the keypair associated with an address using the specified SignatureType. SignatureType can be optionally populated if there is a restriction on the signature scheme that can be used to sign the payload.
 */
export interface SigningPayload {
  /**
   * The network-specific address of the account that should sign the payload.
   */
  address: string;
  hex_bytes: string;
  signature_type?: SignatureType;
}

/**
 * Signature contains the payload that was signed, the public keys of the keypairs used to produce the signature, the signature (encoded in hex), and the SignatureType. PublicKey is often times not known during construction of the signing payloads but may be needed to combine signatures properly.
 */
export interface Signature {
  signing_payload: SigningPayload;
  public_key: PublicKey;
  signature_type: SignatureType;
  hex_bytes: string;
}

/**
 * SignatureType is the type of a cryptographic signature. * ecdsa: `r (32-bytes) || s (32-bytes)` - `64 bytes` * ecdsa_recovery: `r (32-bytes) || s (32-bytes) || v (1-byte)` - `65 bytes` * ed25519: `R (32-byte) || s (32-bytes)` - `64 bytes`
 */
export type SignatureType = "ecdsa" | "ecdsa_recovery" | "ed25519";
/**
 * An AccountBalanceRequest is utilized to make a balance request on the /account/balance endpoint. If the block_identifier is populated, a historical balance query should be performed.
 */
export interface AccountBalanceRequest {
  network_identifier: NetworkIdentifier;
  account_identifier: AccountIdentifier;
  block_identifier?: PartialBlockIdentifier;
}

/**
 * An AccountBalanceResponse is returned on the /account/balance endpoint. If an account has a balance for each AccountIdentifier describing it (ex: an ERC-20 token balance on a few smart contracts), an account balance request must be made with each AccountIdentifier.
 */
export interface AccountBalanceResponse {
  block_identifier: BlockIdentifier;
  /**
   * A single account may have a balance in multiple currencies.
   */
  balances: Amount[];
  /**
   * Account-based blockchains that utilize a nonce or sequence number should include that number in the metadata. This number could be unique to the identifier or global across the account address.
   */
  metadata?: { [key: string]: any };
}

/**
 * A BlockRequest is utilized to make a block request on the /block endpoint.
 */
export interface BlockRequest {
  network_identifier: NetworkIdentifier;
  block_identifier: PartialBlockIdentifier;
}

/**
 * A BlockResponse includes a fully-populated block or a partially-populated block with a list of other transactions to fetch (other_transactions).
 */
export interface BlockResponse {
  block: Block;
  /**
   * Some blockchains may require additional transactions to be fetched that weren't returned in the block response (ex: block only returns transaction hashes). For blockchains with a lot of transactions in each block, this can be very useful as consumers can concurrently fetch all transactions returned.
   */
  other_transactions?: TransactionIdentifier[];
}

/**
 * A BlockTransactionRequest is used to fetch a Transaction included in a block that is not returned in a BlockResponse.
 */
export interface BlockTransactionRequest {
  network_identifier: NetworkIdentifier;
  block_identifier: BlockIdentifier;
  transaction_identifier: TransactionIdentifier;
}

/**
 * A BlockTransactionResponse contains information about a block transaction.
 */
export interface BlockTransactionResponse {
  transaction: Transaction;
}

/**
 * A MempoolResponse contains all transaction identifiers in the mempool for a particular network_identifier.
 */
export interface MempoolResponse {
  transaction_identifiers: TransactionIdentifier[];
}

/**
 * A MempoolTransactionRequest is utilized to retrieve a transaction from the mempool.
 */
export interface MempoolTransactionRequest {
  network_identifier: NetworkIdentifier;
  transaction_identifier: TransactionIdentifier;
}

/**
 * A MempoolTransactionResponse contains an estimate of a mempool transaction. It may not be possible to know the full impact of a transaction in the mempool (ex: fee paid).
 */
export interface MempoolTransactionResponse {
  transaction: Transaction;
  metadata?: { [key: string]: any };
}

/**
 * A MetadataRequest is utilized in any request where the only argument is optional metadata.
 */
export interface MetadataRequest {
  metadata?: { [key: string]: any };
}

/**
 * A NetworkListResponse contains all NetworkIdentifiers that the node can serve information for.
 */
export interface NetworkListResponse {
  network_identifiers: NetworkIdentifier[];
}

/**
 * A NetworkRequest is utilized to retrieve some data specific exclusively to a NetworkIdentifier.
 */
export interface NetworkRequest {
  network_identifier: NetworkIdentifier;
  metadata?: { [key: string]: any };
}

/**
 * NetworkStatusResponse contains basic information about the node's view of a blockchain network. If a Rosetta implementation prunes historical state, it should populate the optional `oldest_block_identifier` field with the oldest block available to query. If this is not populated, it is assumed that the `genesis_block_identifier` is the oldest queryable block.
 */
export interface NetworkStatusResponse {
  current_block_identifier: BlockIdentifier;
  current_block_timestamp: Timestamp;
  genesis_block_identifier: BlockIdentifier;
  oldest_block_identifier?: BlockIdentifier;
  peers: Peer[];
}

/**
 * NetworkOptionsResponse contains information about the versioning of the node and the allowed operation statuses, operation types, and errors.
 */
export interface NetworkOptionsResponse {
  version: Version;
  allow: Allow;
}

/**
 * A ConstructionMetadataRequest is utilized to get information required to construct a transaction. The Options object used to specify which metadata to return is left purposely unstructured to allow flexibility for implementers.
 */
export interface ConstructionMetadataRequest {
  network_identifier: NetworkIdentifier;
  /**
   * Some blockchains require different metadata for different types of transaction construction (ex: delegation versus a transfer). Instead of requiring a blockchain node to return all possible types of metadata for construction (which may require multiple node fetches), the client can populate an options object to limit the metadata returned to only the subset required.
   */
  options: { [key: string]: any };
}

/**
 * The ConstructionMetadataResponse returns network-specific metadata used for transaction construction.
 */
export interface ConstructionMetadataResponse {
  metadata: { [key: string]: any };
}

/**
 * ConstructionDeriveRequest is passed to the `/construction/derive` endpoint. Network is provided in the request because some blockchains have different address formats for different networks. Metadata is provided in the request because some blockchains allow for multiple address types (i.e. different address for validators vs normal accounts).
 */
export interface ConstructionDeriveRequest {
  network_identifier: NetworkIdentifier;
  public_key: PublicKey;
  metadata?: { [key: string]: any };
}

/**
 * ConstructionDeriveResponse is returned by the `/construction/derive` endpoint.
 */
export interface ConstructionDeriveResponse {
  /**
   * Address in network-specific format.
   */
  address: string;
  metadata?: { [key: string]: any };
}

/**
 * ConstructionPreprocessRequest is passed to the `/construction/preprocess` endpoint so that a Rosetta implementation can determine which metadata it needs to request for construction.
 */
export interface ConstructionPreprocessRequest {
  network_identifier: NetworkIdentifier;
  operations: Operation[];
  metadata?: { [key: string]: any };
}

/**
 * ConstructionPreprocessResponse contains the request that will be sent directly to `/construction/metadata`. If it is not necessary to make a request to `/construction/metadata`, options should be null.
 */
export interface ConstructionPreprocessResponse {
  /**
   * The options that will be sent directly to `/construction/metadata` by the caller.
   */
  options?: { [key: string]: any };
}

/**
 * ConstructionPayloadsRequest is the request to `/construction/payloads`. It contains the network, a slice of operations, and arbitrary metadata that was returned by the call to `/construction/metadata`.
 */
export interface ConstructionPayloadsRequest {
  network_identifier: NetworkIdentifier;
  operations: Operation[];
  metadata?: { [key: string]: any };
}

/**
 * ConstructionTransactionResponse is returned by `/construction/payloads`. It contains an unsigned transaction blob (that is usually needed to construct the a network transaction from a collection of signatures) and an array of payloads that must be signed by the caller.
 */
export interface ConstructionPayloadsResponse {
  unsigned_transaction: string;
  payloads: SigningPayload[];
}

/**
 * ConstructionCombineRequest is the input to the `/construction/combine` endpoint. It contains the unsigned transaction blob returned by `/construction/payloads` and all required signatures to create a network transaction.
 */
export interface ConstructionCombineRequest {
  network_identifier: NetworkIdentifier;
  unsigned_transaction: string;
  signatures: Signature[];
}

/**
 * ConstructionCombineResponse is returned by `/construction/combine`. The network payload will be sent directly to the `construction/submit` endpoint.
 */
export interface ConstructionCombineResponse {
  signed_transaction: string;
}

/**
 * ConstructionParseRequest is the input to the `/construction/parse` endpoint. It allows the caller to parse either an unsigned or signed transaction.
 */
export interface ConstructionParseRequest {
  network_identifier: NetworkIdentifier;
  /**
   * Signed is a boolean indicating whether the transaction is signed.
   */
  signed: boolean;
  /**
   * This must be either the unsigned transaction blob returned by `/construction/payloads` or the signed transaction blob returned by `/construction/combine`.
   */
  transaction: string;
}

/**
 * ConstructionParseResponse contains an array of operations that occur in a transaction blob. This should match the array of operations provided to `/construction/preprocess` and `/construction/payloads`.
 */
export interface ConstructionParseResponse {
  operations: Operation[];
  /**
   * All signers of a particular transaction. If the transaction is unsigned, it should be empty.
   */
  signers: string[];
  metadata?: { [key: string]: any };
}

/**
 * ConstructionHashRequest is the input to the `/construction/hash` endpoint.
 */
export interface ConstructionHashRequest {
  network_identifier: NetworkIdentifier;
  signed_transaction: string;
}

/**
 * ConstructionHashResponse is the output of the `/construction/hash` endpoint.
 */
export interface ConstructionHashResponse {
  transaction_hash: string;
}

/**
 * The transaction submission request includes a signed transaction.
 */
export interface ConstructionSubmitRequest {
  network_identifier: NetworkIdentifier;
  signed_transaction: string;
}

/**
 * A TransactionSubmitResponse contains the transaction_identifier of a submitted transaction that was accepted into the mempool.
 */
export interface ConstructionSubmitResponse {
  transaction_identifier: TransactionIdentifier;
  metadata?: { [key: string]: any };
}

/**
 * Instead of utilizing HTTP status codes to describe node errors (which often do not have a good analog), rich errors are returned using this object.
 */
export interface Error {
  /**
   * Code is a network-specific error code. If desired, this code can be equivalent to an HTTP status code.
   */
  code: number;
  /**
   * Message is a network-specific error message.
   */
  message: string;
  /**
   * An error is retriable if the same request may succeed if submitted again.
   */
  retriable: boolean;
  /**
   * Often times it is useful to return context specific to the request that caused the error (i.e. a sample of the stack trace or impacted account) in addition to the standard error message.
   */
  details?: { [key: string]: any };
}
