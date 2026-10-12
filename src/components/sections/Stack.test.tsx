import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders technology categories and representative skills", () => {
    render(<Stack />);

    expect(screen.getByText(/Frontend Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Next.js/i)).toBeInTheDocument();
    expect(screen.getByText(/Node.js/i)).toBeInTheDocument();
    expect(screen.getByText(/OpenAI/i)).toBeInTheDocument();
    expect(screen.getByText(/Engenharia Cibernética/i)).toBeInTheDocument();
    expect(screen.getByText(/E2E de autenticação, autorização e sessão/i)).toBeInTheDocument();
    expect(screen.getByText("Playwright E2E")).toBeInTheDocument();
    expect(screen.getByText("OWASP ZAP Baseline")).toBeInTheDocument();
    expect(screen.getByText("OWASP ASVS")).toBeInTheDocument();
    expect(screen.getByText("Burp Suite")).toBeInTheDocument();
    expect(screen.getByText("Wazuh")).toBeInTheDocument();
  });
});
