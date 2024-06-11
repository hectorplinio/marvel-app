import { test, expect } from "@playwright/test";

test("Homepage has title and displays characters", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Marvel/);
  await page.waitForSelector(".card-container", { timeout: 5000 });

  const characterCards = await page.$$(".card-container");
  expect(characterCards.length).toBeGreaterThan(0);
});
