import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { GlassCard } from "@/components/ui/GlassCard";

describe("GlassCard", () => {
  it("renders content with the base surface styles", () => {
    render(<GlassCard>Conteúdo do card</GlassCard>);

    const card = screen.getByText("Conteúdo do card");
    expect(card).toHaveClass("glass", "glass-panel", "rounded-2xl", "p-6", "glass-hover");
  });

  it("applies optional interaction styles only when requested", () => {
    render(
      <GlassCard hover={false} glow className="custom-surface">
        Card de destaque
      </GlassCard>,
    );

    const card = screen.getByText("Card de destaque");
    expect(card).toHaveClass("glow-blue", "custom-surface");
    expect(card).not.toHaveClass("glass-hover");
  });
});
