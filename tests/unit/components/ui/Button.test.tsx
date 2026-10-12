import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders a default primary button with the expected content", () => {
    render(<Button>Enviar</Button>);

    const button = screen.getByRole("button", { name: /enviar/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Enviar");
    expect(button).toHaveClass("bg-warm", "text-void");
  });

  it("renders an anchor when href is provided", () => {
    render(<Button href="/contato">Contato</Button>);

    const link = screen.getByRole("link", { name: /contato/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/contato");
    expect(link).toHaveClass("inline-flex", "rounded-xl");
  });

  it("fires the click handler when activated", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Salvar</Button>);

    await user.click(screen.getByRole("button", { name: /salvar/i }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
