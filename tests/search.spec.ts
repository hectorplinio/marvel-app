import { test, expect } from "@playwright/test";

test("Search for a character", async ({ page }) => {
  await page.goto("/");
  await page.fill('input[placeholder="SEARCH A CHARACTER..."]', "3-d man");

  await page.waitForSelector(".card-container", { timeout: 5000 });

  const characterCards = await page.$$(".card-container");
  expect(characterCards.length).toBeGreaterThan(0);

  const firstCharacter = await page.$eval(
    ".card-container",
    (el) => el.textContent,
  );
  expect(firstCharacter?.toLowerCase()).toContain("3-d man");
});
