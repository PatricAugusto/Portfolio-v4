import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Projects } from "@/components/sections/Projects";

describe("Projects", () => {
  it("renders featured project cards and their availability", () => {
    render(<Projects />);

    expect(screen.getByText(/Buscador de empresas por CNPJ/i)).toBeInTheDocument();
    expect(screen.getByText(/API de Receitas com IA/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Live/i).length).toBeGreaterThan(0);
  });
});
