import * as utils from "../src/utils";

describe("Utils Tests", () => {
  it("should create custom headers", async () => {
    const headers = utils.setCustomHeaders({
      "X-Api-Key": "abc",
    });

    expect(headers).toEqual({ headers: { "X-Api-Key": "abc" } });
  });

  it("should create empty headers", async () => {
    const headers = utils.setCustomHeaders(null);

    expect(headers).toEqual({});
  });
});
