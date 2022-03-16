import { getMenu } from "../../src/apis/menuApi";
import { enableFetchMocks } from "jest-fetch-mock";

it("API menu response correctly", async () => {
  let menu = await getMenu();
  expect(menu).toHaveProperty("result");
});
