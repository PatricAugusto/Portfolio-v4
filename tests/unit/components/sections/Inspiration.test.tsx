import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Inspiration } from "@/components/sections/Inspiration";

describe("Inspiration", () => {
  it("thanks the teams whose work inspires new ideas", () => {
    render(<Inspiration />);

    expect(
      screen.getByRole("heading", { name: /ideias que inspiram novos caminhos/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/agradecimento aos times/i)).toBeInTheDocument();
    expect(screen.getByText("NASA")).toBeInTheDocument();
    expect(screen.getByText("SpaceXSI")).toBeInTheDocument();
    expect(screen.getByText("Google")).toBeInTheDocument();
    expect(screen.getByText("Anthropic")).toBeInTheDocument();
    expect(screen.getByText("OpenAI")).toBeInTheDocument();
  });
});
