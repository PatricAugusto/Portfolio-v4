import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero } from "@/components/sections/Hero";

describe("Hero", () => {
  it("renders its introduction and primary navigation links", () => {
    const { container } = render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: /software inteligente/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/IA aplicada onde ela realmente agrega valor/i)).toBeInTheDocument();
    expect(screen.getByText("Da ideia ao produto")).toBeInTheDocument();
    expect(screen.getByText("IA com propósito")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ver projetos/i })).toHaveAttribute(
      "href",
      "#projects",
    );
    expect(screen.getByRole("link", { name: /vamos conversar/i })).toHaveAttribute(
      "href",
      "#contact",
    );
    expect(container.querySelector("canvas")).not.toBeInTheDocument();
  });
});
