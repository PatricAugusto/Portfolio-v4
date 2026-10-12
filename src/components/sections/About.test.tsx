import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { About } from "./About";

describe("About", () => {
  it("renders the editorial heading and professional highlights", () => {
    render(<About />);

    expect(screen.getByText(/construindo o digital com/i)).toBeInTheDocument();
    expect(screen.getByText("4+")).toBeInTheDocument();
    expect(screen.getByText("300+")).toBeInTheDocument();
    expect(screen.getByText(/full stack/i)).toBeInTheDocument();
  });
});
