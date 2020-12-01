import axios from "axios";
import * as rosetta from "./types/rosetta";
import * as utils from "./utils";

export class RosettaClient {
  _baseUrl: string;
  _headers: { [key: string]: string };

  constructor(baseUrl: string, headers?: { [key: string]: string }) {
    this._baseUrl = baseUrl;
    this._headers = headers ? headers : {};
  }

  /**********************************************
   ** Data Endpoints
   **********************************************/

  accountBalance = async (
    req: rosetta.AccountBalanceRequest
  ): Promise<rosetta.AccountBalanceResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/account/balance`,
        req
      );
      const data: rosetta.AccountBalanceResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  accountCoins = async (
    req: rosetta.AccountCoinsRequest
  ): Promise<rosetta.AccountCoinsResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/account/coins`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.AccountCoinsResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  block = async (req: rosetta.BlockRequest): Promise<rosetta.BlockResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/block`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.BlockResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  blockTransaction = async (
    req: rosetta.BlockTransactionRequest
  ): Promise<rosetta.BlockTransactionResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/block/transaction`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.BlockTransactionResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  networksList = async (
    req?: rosetta.MetadataRequest
  ): Promise<rosetta.NetworkListResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/network/list`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const lunarRes: rosetta.NetworkListResponse = response.data;
      return lunarRes;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  networkOptions = async (
    req: rosetta.NetworkRequest
  ): Promise<rosetta.NetworkOptionsResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/network/options`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.NetworkOptionsResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  networkStatus = async (
    req: rosetta.NetworkRequest
  ): Promise<rosetta.NetworkStatusResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/network/status`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.NetworkStatusResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  mempool = async (
    req: rosetta.NetworkRequest
  ): Promise<rosetta.MempoolResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/mempool`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.MempoolResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  mempoolTransaction = async (
    req: rosetta.MempoolTransactionRequest
  ): Promise<rosetta.MempoolTransactionResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/mempool/transaction`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.MempoolTransactionResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  /**********************************************
   ** Construction Endpoints
   **********************************************/

  combine = async (
    req: rosetta.ConstructionCombineRequest
  ): Promise<rosetta.ConstructionCombineResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/combine`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.ConstructionCombineResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  derive = async (
    req: rosetta.ConstructionDeriveRequest
  ): Promise<rosetta.ConstructionDeriveResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/derive`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.ConstructionDeriveResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  hash = async (
    req: rosetta.ConstructionHashRequest
  ): Promise<rosetta.TransactionIdentifierResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/hash`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.TransactionIdentifierResponse = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  metadata = async (
    req: rosetta.ConstructionMetadataRequest
  ): Promise<rosetta.ConstructionMetadataResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/metadata`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.ConstructionMetadataResponse = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  parse = async (
    req: rosetta.ConstructionParseRequest
  ): Promise<rosetta.ConstructionParseResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/parse`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.ConstructionParseResponse = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  payloads = async (
    req: rosetta.ConstructionPayloadsRequest
  ): Promise<rosetta.ConstructionPayloadsResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/payloads`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.ConstructionPayloadsResponse = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  preprocess = async (
    req: rosetta.ConstructionPreprocessRequest
  ): Promise<rosetta.ConstructionPreprocessResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/preprocess`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.ConstructionPreprocessResponse = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  submit = async (
    req: rosetta.ConstructionSubmitRequest
  ): Promise<rosetta.TransactionIdentifierResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/submit`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: rosetta.TransactionIdentifierResponse = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
