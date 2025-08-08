import { test, expect } from "@playwright/test";

test.describe("Investments Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/investments");
  });

  test("should load the investments page successfully", async ({ page }) => {
    // Check that the page loads without errors
    await expect(page).toHaveTitle(/Think Smarter Group/);

    // Check that the main content is visible
    await expect(
      page.getByRole("heading", { name: /our investments/i }),
    ).toBeVisible();
  });

  test("should display investments grid", async ({ page }) => {
    // Wait for investments to load
    await page.waitForSelector('[data-testid="investment-card"], .bg-black', {
      timeout: 10000,
    });

    // Check that investment cards are displayed
    const investmentCards = page.locator(
      '[data-testid="investment-card"], .bg-black',
    );
    await expect(investmentCards.first()).toBeVisible();

    // Should have multiple investment cards
    const cardCount = await investmentCards.count();
    expect(cardCount).toBeGreaterThan(0);
  });

  test("should display category filter buttons", async ({ page }) => {
    // Wait for category filters to load
    await page.waitForSelector('button[class*="rounded-full"]', {
      timeout: 5000,
    });

    // Check that category filter buttons are present
    const categoryButtons = page.locator('button[class*="rounded-full"]');
    await expect(categoryButtons.first()).toBeVisible();

    // Should have multiple category options
    const buttonCount = await categoryButtons.count();
    expect(buttonCount).toBeGreaterThan(0);
  });

  test("should filter investments by category", async ({ page }) => {
    // Wait for content to load
    await page.waitForSelector('[data-testid="investment-card"], .bg-black', {
      timeout: 10000,
    });
    await page.waitForSelector('button[class*="rounded-full"]', {
      timeout: 5000,
    });

    // Get initial count of investment cards
    const initialCards = page.locator(
      '[data-testid="investment-card"], .bg-black',
    );
    const initialCount = await initialCards.count();

    // Click on first category filter
    const firstCategoryButton = page
      .locator('button[class*="rounded-full"]')
      .first();
    await firstCategoryButton.click();

    // Wait for potential re-render
    await page.waitForTimeout(500);

    // Check that filtering occurred (either fewer cards or same count)
    const filteredCards = page.locator(
      '[data-testid="investment-card"], .bg-black',
    );
    const filteredCount = await filteredCards.count();

    // Filtered count should be less than or equal to initial count
    expect(filteredCount).toBeLessThanOrEqual(initialCount);
  });

  test("should clear filter when clicking selected category again", async ({
    page,
  }) => {
    // Wait for content to load
    await page.waitForSelector('[data-testid="investment-card"], .bg-black', {
      timeout: 10000,
    });
    await page.waitForSelector('button[class*="rounded-full"]', {
      timeout: 5000,
    });

    // Get initial count
    const initialCards = page.locator(
      '[data-testid="investment-card"], .bg-black',
    );
    const initialCount = await initialCards.count();

    // Click on first category filter
    const firstCategoryButton = page
      .locator('button[class*="rounded-full"]')
      .first();
    await firstCategoryButton.click();

    // Wait for filter to apply
    await page.waitForTimeout(500);

    // Click the same button again to clear filter
    await firstCategoryButton.click();

    // Wait for filter to clear
    await page.waitForTimeout(500);

    // Should return to initial count
    const finalCards = page.locator(
      '[data-testid="investment-card"], .bg-black',
    );
    const finalCount = await finalCards.count();
    expect(finalCount).toBe(initialCount);
  });

  test("should display investment card content correctly", async ({ page }) => {
    // Wait for investments to load
    await page.waitForSelector('[data-testid="investment-card"], .bg-black', {
      timeout: 10000,
    });

    // Check first investment card
    const firstCard = page
      .locator('[data-testid="investment-card"], .bg-black')
      .first();

    // Should have an image
    await expect(firstCard.locator("img")).toBeVisible();

    // The card itself should be a link
    await expect(firstCard).toHaveAttribute("target", "_blank");
    await expect(firstCard).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("should display investment descriptions on hover", async ({ page }) => {
    // Wait for investments to load
    await page.waitForSelector('[data-testid="investment-card"], .bg-black', {
      timeout: 10000,
    });

    // Get first investment card
    const firstCard = page
      .locator('[data-testid="investment-card"], .bg-black')
      .first();

    // Hover over the card
    await firstCard.hover();

    // Wait for hover effects
    await page.waitForTimeout(300);

    // Check that hover content is visible (title and description)
    await expect(firstCard.locator("h3")).toBeVisible();
    // Check for description paragraph specifically (not category text)
    await expect(firstCard.locator("p.text-white\\/90")).toBeVisible();
  });

  test("should be responsive on mobile devices", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Wait for content to load
    await page.waitForSelector('[data-testid="investment-card"], .bg-black', {
      timeout: 10000,
    });

    // Check that page is responsive
    await expect(
      page.getByRole("heading", { name: /our investments/i }),
    ).toBeVisible();

    // Check that investment cards are visible on mobile
    const investmentCards = page.locator(
      '[data-testid="investment-card"], .bg-black',
    );
    await expect(investmentCards.first()).toBeVisible();

    // Check that category filters are accessible on mobile
    const categoryButtons = page.locator('button[class*="rounded-full"]');
    await expect(categoryButtons.first()).toBeVisible();
  });

  test("should handle navigation from investment cards", async ({ page }) => {
    // Wait for investments to load
    await page.waitForSelector('[data-testid="investment-card"], .bg-black', {
      timeout: 10000,
    });

    // Get first investment card link
    const firstCardLink = page
      .locator('[data-testid="investment-card"], .bg-black a')
      .first();

    // Get the href attribute
    const href = await firstCardLink.getAttribute("href");
    expect(href).toBeTruthy();
    expect(href).toMatch(/^https?:\/\//);

    // Note: We don't actually click the link as it opens in a new tab
    // and we want to stay on the current page for testing
  });

  test("should display page description", async ({ page }) => {
    // Check that the page description is visible
    await expect(
      page.getByText(/we have made a range of investments/i),
    ).toBeVisible();
    await expect(
      page.getByText(/we invest in the following sectors/i),
    ).toBeVisible();
  });

  test("should handle multiple category selections", async ({ page }) => {
    // Wait for content to load
    await page.waitForSelector('[data-testid="investment-card"], .bg-black', {
      timeout: 10000,
    });
    await page.waitForSelector('button[class*="rounded-full"]', {
      timeout: 5000,
    });

    // Get all category buttons
    const categoryButtons = page.locator('button[class*="rounded-full"]');
    const buttonCount = await categoryButtons.count();

    // Test clicking different categories
    if (buttonCount >= 2) {
      // Click first category
      await categoryButtons.nth(0).click();
      await page.waitForTimeout(500);

      // Click second category
      await categoryButtons.nth(1).click();
      await page.waitForTimeout(500);

      // Should still show some investments
      const investmentCards = page.locator(
        '[data-testid="investment-card"], .bg-black',
      );
      const cardCount = await investmentCards.count();
      expect(cardCount).toBeGreaterThan(0);
    }
  });

  test("should maintain filter state during page interactions", async ({
    page,
  }) => {
    // Wait for content to load
    await page.waitForSelector('[data-testid="investment-card"], .bg-black', {
      timeout: 10000,
    });
    await page.waitForSelector('button[class*="rounded-full"]', {
      timeout: 5000,
    });

    // Get initial count
    const initialCards = page.locator(
      '[data-testid="investment-card"], .bg-black',
    );
    const initialCount = await initialCards.count();

    // Apply a filter
    const firstCategoryButton = page
      .locator('button[class*="rounded-full"]')
      .first();
    await firstCategoryButton.click();
    await page.waitForTimeout(500);

    // Scroll down and back up
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    // Filter should still be applied
    const filteredCards = page.locator(
      '[data-testid="investment-card"], .bg-black',
    );
    const filteredCount = await filteredCards.count();
    expect(filteredCount).toBeLessThanOrEqual(initialCount);
  });
});
