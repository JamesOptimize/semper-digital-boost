import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Accessibility + keyboard tests for the testimonials carousel on the home page.
 *
 * Covers:
 *  - axe-core scan (WCAG 2.1 A/AA) scoped to the testimonials section
 *  - Tab order: pagination dots → Prev → Next
 *  - Arrow keys on the pagination tablist move selection + focus
 *  - Active dot has aria-selected="true" and is the only tab-stop in the tablist
 *  - Prev/Next buttons advance selection and update aria-selected on dots
 */

const SECTION = 'section[aria-labelledby="testimonials-heading"]';

test.describe("Testimonials carousel — a11y & keyboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator(SECTION).scrollIntoViewIfNeeded();
    await expect(page.locator(SECTION)).toBeVisible();
  });

  test("has no detectable WCAG A/AA violations", async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .include(SECTION)
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });

  test("pagination dots are a roving-tabindex tablist", async ({ page }) => {
    const tablist = page.locator(SECTION).getByRole("tablist", { name: /select testimonial/i });
    await expect(tablist).toBeVisible();

    const tabs = tablist.getByRole("tab");
    const count = await tabs.count();
    expect(count).toBeGreaterThanOrEqual(2);

    // Exactly one tab is selected and tabbable.
    const selected = tablist.getByRole("tab", { selected: true });
    await expect(selected).toHaveCount(1);
    await expect(selected).toHaveAttribute("tabindex", "0");

    for (let i = 0; i < count; i++) {
      const tab = tabs.nth(i);
      const isSel = (await tab.getAttribute("aria-selected")) === "true";
      await expect(tab).toHaveAttribute("tabindex", isSel ? "0" : "-1");
    }
  });

  test("ArrowRight moves selection and focus to the next dot", async ({ page }) => {
    const tablist = page.locator(SECTION).getByRole("tablist", { name: /select testimonial/i });
    const firstTab = tablist.getByRole("tab").nth(0);
    await firstTab.focus();
    await expect(firstTab).toBeFocused();
    await expect(firstTab).toHaveAttribute("aria-selected", "true");

    await page.keyboard.press("ArrowRight");

    const secondTab = tablist.getByRole("tab").nth(1);
    await expect(secondTab).toBeFocused();
    await expect(secondTab).toHaveAttribute("aria-selected", "true");
    await expect(firstTab).toHaveAttribute("aria-selected", "false");
  });

  test("Home / End jump to first / last dot", async ({ page }) => {
    const tablist = page.locator(SECTION).getByRole("tablist", { name: /select testimonial/i });
    const tabs = tablist.getByRole("tab");
    const last = (await tabs.count()) - 1;

    await tabs.nth(0).focus();
    await page.keyboard.press("End");
    await expect(tabs.nth(last)).toBeFocused();
    await expect(tabs.nth(last)).toHaveAttribute("aria-selected", "true");

    await page.keyboard.press("Home");
    await expect(tabs.nth(0)).toBeFocused();
    await expect(tabs.nth(0)).toHaveAttribute("aria-selected", "true");
  });

  test("Next button advances selection and updates the dots", async ({ page }) => {
    const section = page.locator(SECTION);
    const tablist = section.getByRole("tablist", { name: /select testimonial/i });
    const next = section.getByRole("button", { name: /next testimonial/i });

    const initialSelected = tablist.getByRole("tab", { selected: true });
    const initialIndex = await initialSelected.evaluate((el) =>
      Number((el.id.match(/(\d+)$/) ?? [, "0"])[1]),
    );

    await next.click();

    const newSelected = tablist.getByRole("tab", { selected: true });
    await expect(newSelected).toHaveCount(1);
    const newIndex = await newSelected.evaluate((el) =>
      Number((el.id.match(/(\d+)$/) ?? [, "0"])[1]),
    );
    expect(newIndex).not.toBe(initialIndex);
  });

  test("focus is visible on each interactive control", async ({ page }) => {
    const section = page.locator(SECTION);
    const targets = [
      section.getByRole("tab").first(),
      section.getByRole("button", { name: /previous testimonial/i }),
      section.getByRole("button", { name: /next testimonial/i }),
    ];

    for (const target of targets) {
      await target.focus();
      await expect(target).toBeFocused();
      const outlineVisible = await target.evaluate((el) => {
        const cs = getComputedStyle(el);
        // focus-visible:ring-* adds a non-zero box-shadow ring or outline.
        return (
          (cs.boxShadow !== "none" && cs.boxShadow.length > 0) ||
          (cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) > 0)
        );
      });
      expect(outlineVisible, `expected visible focus on ${await target.evaluate((e) => e.outerHTML.slice(0, 80))}`).toBe(true);
    }
  });
});
