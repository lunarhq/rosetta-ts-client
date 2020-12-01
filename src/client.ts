import axios from "axios";

export class RosettaClient {
  _baseUrl: string;

  setBaseUrl = (url: string): void => {
    this._baseUrl = url;
  };

  getBaseUrl = (): string => {
    return this._baseUrl;
  };

  /**********************************************
   ** Data Endpoints
   **********************************************/

  accountBalance = async <T>(
    req: Components.Schemas.AccountBalanceRequest
  ): Promise<Components.Schemas.AccountBalanceResponse<T>> => {
    try {
      const body: Components.Schemas.AccountBalanceRequest = {
        network_identifier: req.account_identifier,
        account_identifier: req.account_identifier,
      };

      if (req.block_identifier) {
        body.block_identifier = req.block_identifier;
      }

      const response = await axios.post(
        `${this._baseUrl}/account/balance`,
        body
      );
      const data: Components.Schemas.AccountBalanceResponse<T> = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  accountCoins = async <T>(
    req: Components.Schemas.AccountCoinsRequest
  ): Promise<Components.Schemas.AccountCoinsResponse<T>> => {
    try {
      const response = await axios.post(`${this._baseUrl}/account/coins`, req);
      const data: Components.Schemas.AccountCoinsResponse<T> = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  block = async (
    req: Components.Schemas.BlockRequest
  ): Promise<Components.Schemas.BlockResponse> => {
    try {
      const response = await axios.post(`${this._baseUrl}/block`, req);
      const data: Components.Schemas.BlockResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  blockTransaction = async (
    req: Components.Schemas.BlockTransactionRequest
  ): Promise<Components.Schemas.BlockTransactionResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/block/transaction`,
        req
      );
      const data: Components.Schemas.BlockTransactionResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  networksList = async <T>(
    req?: Components.Schemas.MetadataRequest<T>
  ): Promise<Components.Schemas.NetworkListResponse> => {
    try {
      const response = await axios.post(`${this._baseUrl}/network/list`, req);
      const lunarRes: Components.Schemas.NetworkListResponse = response.data;
      return lunarRes;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  networkOptions = async <T>(
    req: Components.Schemas.NetworkRequest<T>
  ): Promise<Components.Schemas.NetworkOptionsResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/network/options`,
        req
      );
      const data: Components.Schemas.NetworkOptionsResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  networkStatus = async <T>(
    req: Components.Schemas.NetworkRequest<T>
  ): Promise<Components.Schemas.NetworkStatusResponse> => {
    try {
      const response = await axios.post(`${this._baseUrl}/network/status`, req);
      const data: Components.Schemas.NetworkStatusResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  mempool = async <T>(
    req: Components.Schemas.NetworkRequest<T>
  ): Promise<Components.Schemas.MempoolResponse> => {
    try {
      const response = await axios.post(`${this._baseUrl}/mempool`, req);
      const data: Components.Schemas.MempoolResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  mempoolTransaction = async <T>(
    req: Components.Schemas.MempoolTransactionRequest
  ): Promise<Components.Schemas.MempoolTransactionResponse<T>> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/mempool/transaction`,
        req
      );
      const data: Components.Schemas.MempoolTransactionResponse<T> =
        response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  /**********************************************
   ** Construction Endpoints
   **********************************************/

  combine = async (
    req: Components.Schemas.ConstructionCombineRequest
  ): Promise<Components.Schemas.ConstructionCombineResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/combine`,
        req
      );
      const data: Components.Schemas.ConstructionCombineResponse =
        response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  derive = async <T, U>(
    req: Components.Schemas.ConstructionDeriveRequest<T>
  ): Promise<Components.Schemas.ConstructionDeriveResponse<U>> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/derive`,
        req
      );
      const data: Components.Schemas.ConstructionDeriveResponse<U> =
        response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  hash = async <T>(
    req: Components.Schemas.ConstructionHashRequest
  ): Promise<Components.Schemas.TransactionIdentifierResponse<T>> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/hash`,
        req
      );
      const data: Components.Schemas.TransactionIdentifierResponse<T> =
        response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  metadata = async <T, U>(
    req: Components.Schemas.ConstructionMetadataRequest<T>
  ): Promise<Components.Schemas.ConstructionMetadataResponse<U>> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/metadata`,
        req
      );
      const data: Components.Schemas.ConstructionMetadataResponse<U> =
        response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  parse = async <T>(
    req: Components.Schemas.ConstructionParseRequest
  ): Promise<Components.Schemas.ConstructionParseResponse<T>> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/parse`,
        req
      );
      const data: Components.Schemas.ConstructionParseResponse<T> =
        response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  payloads = async <T>(
    req: Components.Schemas.ConstructionPayloadsRequest<T>
  ): Promise<Components.Schemas.ConstructionPayloadsResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/payloads`,
        req
      );
      const data: Components.Schemas.ConstructionPayloadsResponse =
        response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  preprocess = async <T, U>(
    req: Components.Schemas.ConstructionPreprocessRequest<T>
  ): Promise<Components.Schemas.ConstructionPreprocessResponse<U>> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/preprocess`,
        req
      );
      const data: Components.Schemas.ConstructionPreprocessResponse<U> =
        response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  submit = async <T>(
    req: Components.Schemas.ConstructionSubmitRequest
  ): Promise<Components.Schemas.TransactionIdentifierResponse<T>> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/submit`,
        req
      );
      const data: Components.Schemas.TransactionIdentifierResponse<T> =
        response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
