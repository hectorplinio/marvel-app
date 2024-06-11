import { test, expect } from "@playwright/test";

test("Navigate to character detail page", async ({ page }) => {
  await page.goto("/");

  await page.waitForSelector(".card-container", { timeout: 5000 });

  const firstCharacterCard = await page.$(".card-container");
  if (!firstCharacterCard) {
    throw new Error("No character cards found");
  }

  await firstCharacterCard.click();

  await page.waitForURL(/\/character\/\d+/, { timeout: 5000 });

  await page.waitForSelector("h1", { timeout: 5000 });

  const characterName = await page.$eval("h1", (el) => el.textContent);
  expect(characterName).not.toBe("");
});
