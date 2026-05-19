import { test, expect } from '@playwright/test';

test('shows the homepage title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Angela Rubalcava/);
});

test('renders the hero heading and role', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1, name: 'Angela Rubalcava' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 5 })).toContainText('Full Stack Software Engineer');
});
