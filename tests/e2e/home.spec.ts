import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load the home page", async ({ page }) => {
    await page.goto("/");

    // Check that the page loads without errors
    await expect(page).toHaveTitle(/Think Smarter Group/);
  });

  test("should display navigation menu", async ({ page }) => {
    await page.goto("/");

    // Check that navigation elements are present
    await expect(page.getByRole("navigation")).toBeVisible();
    await expect(page.getByRole("link", { name: /services/i })).toBeVisible();
    await expect(
      page.getByRole("link", { name: /investments/i }),
    ).toBeVisible();
  });

  test("should navigate to services page", async ({ page }) => {
    await page.goto("/");

    // Click on services link
    await page.getByRole("link", { name: /services/i }).click();

    // Verify navigation to services page
    await expect(page).toHaveURL(/.*services/);
  });

  test("should display contact form", async ({ page }) => {
    await page.goto("/");

    // Scroll to contact section or navigate to it
    await page
      .getByRole("heading", { name: /contact/i })
      .scrollIntoViewIfNeeded();

    // Check that contact form elements are present
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /send/i })).toBeVisible();
  });

  test("should be responsive on mobile", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Check that mobile navigation works
    await expect(page.getByRole("navigation")).toBeVisible();

    // Verify content is readable on mobile
    await expect(page.getByRole("main")).toBeVisible();
  });
});
