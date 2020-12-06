export const setCustomHeaders = (headers?: {
  [key: string]: string;
}): { headers?: { [key: string]: string } } => {
  return headers
    ? {
        headers,
      }
    : {};
};
