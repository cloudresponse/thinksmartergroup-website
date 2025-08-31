import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load the home page", async ({ page }) => {
    await page.goto("/");

    // Check that the page loads without errors
    await expect(page).toHaveTitle(/Think Smarter Group/);
  });

  test("should display navigation menu", async ({ page }) => {
    await page.goto("/");

    // Check that at least one primary navigation is present (avoid strict mode by selecting first)
    const primaryNav = page.getByRole("navigation").first();
    await expect(primaryNav).toBeVisible();
    let servicesLink = page.locator('a[href="/services"]:visible').first();
    if (!(await servicesLink.isVisible())) {
      const menuButton = page.getByRole("button", { name: /open menu/i });
      if (await menuButton.isVisible()) {
        await menuButton.click();
      }
      servicesLink = page.locator('a[href="/services"]:visible').first();
    }
    await expect(servicesLink).toBeVisible();
    const investmentsLink = page
      .locator('a[href="/investments"]:visible')
      .first();
    await expect(investmentsLink).toBeVisible();
  });

  test("should navigate to services page", async ({ page }) => {
    await page.goto("/");
    const servicesLink = page.locator('a[href="/services"]:visible').first();
    await expect(servicesLink).toBeVisible();

    await Promise.all([
      page.waitForURL(/\/services$/), // starts waiting before click
      servicesLink.click(),
    ]);

    await expect(
      page.getByRole("region", { name: "Services page content" })
    ).toBeVisible();
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
    // Current button label is "Submit"
    await expect(page.getByRole("button", { name: /submit/i })).toBeVisible();
  });

  test("should be responsive on mobile", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Check that at least one navigation landmark is visible
    await expect(page.getByRole("navigation").first()).toBeVisible();

    // Verify content is readable on mobile
    await expect(page.getByRole("main")).toBeVisible();
  });
});
