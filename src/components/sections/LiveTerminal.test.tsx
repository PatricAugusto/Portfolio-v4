import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { LiveTerminal } from "./LiveTerminal";

describe("LiveTerminal", () => {
  it("executes help and displays terminal output", async () => {
    const user = userEvent.setup();
    render(<LiveTerminal />);

    const input = screen.getByLabelText(/comando do terminal/i);
    await user.type(input, "help");
    await user.click(screen.getByRole("button", { name: /executar comando/i }));

    expect(await screen.findByText(/lista os comandos disponíveis/i)).toBeInTheDocument();
    expect(screen.getAllByText(/help/i).length).toBeGreaterThan(0);
  });

  it("includes cybersecurity tools in the stack output", async () => {
    const user = userEvent.setup();
    render(<LiveTerminal />);

    const input = screen.getByRole("textbox");
    await user.type(input, "fetch --stack");
    await user.keyboard("{Enter}");

    expect(await screen.findByText(/"cyber": \[/, {}, { timeout: 5000 })).toBeInTheDocument();
    expect(await screen.findByText(/"Playwright E2E"/, {}, { timeout: 5000 })).toBeInTheDocument();
  });

  it("rejects unknown commands and clears the session on request", async () => {
    const user = userEvent.setup();
    render(<LiveTerminal />);

    const input = screen.getByLabelText(/comando do terminal/i);
    await user.type(input, "rm -rf /");
    await user.click(screen.getByRole("button", { name: /executar comando/i }));
    expect(screen.getByText(/command not found: rm -rf \//i)).toBeInTheDocument();

    await user.clear(input);
    await user.type(input, "clear");
    await user.click(screen.getByRole("button", { name: /executar comando/i }));
    expect(screen.queryByText(/live-shell v1.0.0/i)).not.toBeInTheDocument();
  });
});
