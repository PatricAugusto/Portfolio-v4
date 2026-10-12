import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SectionHeading } from "./SectionHeading";

describe("SectionHeading", () => {
  it("renders the tag, title and optional description", () => {
    render(
      <SectionHeading
        tag="Sobre"
        title="Construindo produtos digitais"
        description="Lidamos com arquitetura, performance e UX"
        align="center"
      />,
    );

    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /construindo produtos digitais/i }),
    ).toHaveClass("font-semibold", "tracking-tight");
    expect(screen.getByText(/lidamos com arquitetura, performance e ux/i)).toBeInTheDocument();
  });
});
