import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Angela Rubalcava/);
});

test('shows core homepage content', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1, name: 'Angela Rubalcava' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 5, name: /Full Stack Software Engineer/ })).toBeVisible();
});
