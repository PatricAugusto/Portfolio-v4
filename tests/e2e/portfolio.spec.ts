import { expect, test } from "@playwright/test";

test("navigates to the inspiration section from the mobile menu", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: /software inteligente/i }),
  ).toBeVisible();

  await page.getByRole("button", { name: /abrir menu/i }).click();
  const menu = page.getByRole("dialog", { name: /navegação principal/i });
  await expect(menu).toBeVisible();
  await menu.getByRole("link", { name: /inspiração/i }).click();

  await expect(page).toHaveURL(/#inspiration$/);
  await expect(
    page.getByRole("heading", { name: /ideias que inspiram novos caminhos/i }),
  ).toBeVisible();
  await expect(page.getByText("Anthropic")).toBeVisible();
});

test("enforces contact form requirements and protects external links", async ({ page }) => {
  await page.goto("/");

  const form = page.locator("#contact form");
  const name = form.getByLabel(/identifier \[nome\]/i);
  const email = form.getByLabel(/return_addr \[email\]/i);
  const message = form.getByLabel(/payload \[mensagem\]/i);
  const consent = form.getByLabel(/autorizo o processamento dos dados/i);

  await expect(name).toHaveAttribute("required", "");
  await expect(email).toHaveAttribute("type", "email");
  await expect(email).toHaveAttribute("required", "");
  await expect(message).toHaveAttribute("required", "");
  await expect(consent).toHaveAttribute("required", "");
  await expect(form.locator('input[name="botcheck"]')).toBeHidden();

  const externalLinks = page.locator('a[target="_blank"]');
  await expect(externalLinks.first()).toHaveAttribute("rel", /noopener/);
  await expect(externalLinks.first()).toHaveAttribute("rel", /noreferrer/);
});
