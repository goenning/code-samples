import { getPageTitle } from "../src/index";
import { expect } from "chai";

describe("getPageTitle", () => {
  it("should return page title", async () => {
    const title = await getPageTitle("http://goenning.net/");
    expect(title).to.be.eq("@goenning");
  });
});