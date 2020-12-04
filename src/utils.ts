import { RosettaClient } from "./client";
import { RosettaClientVersion1_4_1 } from "./client_v1_4_1";

export const setCustomHeaders = (headers?: {
  [key: string]: string;
}): { headers?: { [key: string]: string } } => {
  return headers
    ? {
        headers,
      }
    : {};
};

export type RosettaVersion = "1.4.1" | "1.4.8";

export const setVersion = (
  version: RosettaVersion,
  baseUrl: string,
  headers: {
    [key: string]: string;
  }
): RosettaClient | RosettaClientVersion1_4_1 => {
  switch (version) {
    case "1.4.1":
      return new RosettaClientVersion1_4_1({
        baseUrl: baseUrl,
        headers: headers,
      });

    case "1.4.8":
      return new RosettaClient({
        baseUrl: baseUrl,
        headers: headers,
      });
    default:
      return this;
  }
};
