import { test, expect } from '@playwright/test';

test('Add new transactions and verify their appearance in the historical transaction log', async ({
  page,
}) => {
  await page.goto('https://cash-control-app.netlify.app/');

  await page.getByTestId('resume-component').click();

  await expect(page.getByTestId('resume-component')).toBeVisible();
  await page.getByRole('button', { name: 'Add movement' }).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('first title');
  await page.getByLabel('Amount').click();
  await page.getByLabel('Amount').fill('123.45');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('first description');
  await page.getByLabel('Income').check();
  await page
    .getByTestId('form')
    .getByRole('button', { name: 'Add Movement' })
    .click();
  await expect(page.getByRole('heading', { name: '123,45 €' })).toBeVisible();

  await page.getByRole('button', { name: 'Add movement' }).click();

  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('second title');
  await page.getByLabel('Amount').click();
  await page.getByLabel('Amount').fill('200');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('second description');
  await page.getByLabel('Expense').check();
  await page
    .getByTestId('form')
    .getByRole('button', { name: 'Add Movement' })
    .click();
  await expect(page.getByRole('heading', { name: '-76,55 €' })).toBeVisible();

  await page.locator('.grip').click();
  await expect(
    page.getByText('first titlefirst description123,45 €'),
  ).toBeVisible();
  await expect(
    page.getByText('second titlesecond description-200,00 €'),
  ).toBeVisible();
});
