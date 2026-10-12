import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("Home page integration", () => {
  it("connects primary navigation to the rendered page sections", () => {
    const { container } = render(<Home />);
    const main = within(screen.getByRole("main"));

    for (const sectionId of [
      "hero",
      "about",
      "stack",
      "inspiration",
      "projects",
      "contact",
    ]) {
      expect(container.querySelector(`#${sectionId}`)).toBeInTheDocument();
    }

    expect(
      main.getByRole("heading", { name: /software inteligente/i }),
    ).toBeInTheDocument();
    expect(
      main.getByRole("heading", { name: /ideias que inspiram novos caminhos/i }),
    ).toBeInTheDocument();
    expect(container.querySelector('a[href="#inspiration"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="#contact"]')).toBeInTheDocument();
  });
});
