import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Contact } from "@/components/sections/Contact";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("Contact", () => {
  it("keeps required security controls and form validation signals", () => {
    const { container } = render(<Contact />);
    const name = screen.getByLabelText(/identifier \[nome\]/i);
    const email = screen.getByLabelText(/return_addr \[email\]/i);
    const message = screen.getByLabelText(/payload \[mensagem\]/i);

    expect(container.querySelector('input[name="botcheck"]')).toHaveClass("hidden");
    expect(name).toBeRequired();
    expect(email).toBeRequired();
    expect(email).toHaveAttribute("type", "email");
    expect(message).toBeRequired();
    expect(screen.getByLabelText(/autorizo o processamento dos dados/i)).toBeRequired();

    const form = name.closest("form");
    expect(form).not.toBeNull();
    expect(form).not.toBeValid();
    expect(email).toHaveAccessibleName(/return_addr \[email\]/i);
  });

  it("does not send invalid form data to the API", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    render(<Contact />);
    await user.click(screen.getByRole("button", { name: /transmitir mensagem/i }));

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("submits valid form data and displays confirmation", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<Contact />);
    await user.type(screen.getByLabelText(/identifier \[nome\]/i), "Patric");
    await user.type(screen.getByLabelText(/return_addr \[email\]/i), "patric@email.com");
    await user.type(screen.getByLabelText(/payload \[mensagem\]/i), "Preciso de um site moderno");
    await user.click(screen.getByLabelText(/autorizo o processamento dos dados/i));
    await user.click(screen.getByRole("button", { name: /transmitir mensagem/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Patric",
          email: "patric@email.com",
          message: "Preciso de um site moderno",
        }),
      });
    });

    expect(await screen.findByText(/transmissão_concluída/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/identifier \[nome\]/i)).toHaveValue("");
    expect(screen.getByLabelText(/return_addr \[email\]/i)).toHaveValue("");
    expect(screen.getByLabelText(/payload \[mensagem\]/i)).toHaveValue("");
  });

  it("shows an API error and retains entered values", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ success: false }),
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<Contact />);
    await user.type(screen.getByLabelText(/identifier \[nome\]/i), "Patric");
    await user.type(screen.getByLabelText(/return_addr \[email\]/i), "patric@email.com");
    await user.type(screen.getByLabelText(/payload \[mensagem\]/i), "Mensagem de teste");
    await user.click(screen.getByLabelText(/autorizo o processamento dos dados/i));
    await user.click(screen.getByRole("button", { name: /transmitir mensagem/i }));

    expect(await screen.findByText(/erro_no_envio/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/identifier \[nome\]/i)).toHaveValue("Patric");
    expect(screen.getByLabelText(/return_addr \[email\]/i)).toHaveValue("patric@email.com");
    expect(screen.getByLabelText(/payload \[mensagem\]/i)).toHaveValue("Mensagem de teste");
  });

  it("reports network failures without clearing the entered message", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockRejectedValue(new Error("Network unavailable"));
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    vi.stubGlobal("fetch", fetchMock);

    render(<Contact />);
    await user.type(screen.getByLabelText(/identifier \[nome\]/i), "Patric");
    await user.type(screen.getByLabelText(/return_addr \[email\]/i), "patric@email.com");
    await user.type(screen.getByLabelText(/payload \[mensagem\]/i), "Mensagem de teste");
    await user.click(screen.getByLabelText(/autorizo o processamento dos dados/i));
    await user.click(screen.getByRole("button", { name: /transmitir mensagem/i }));

    expect(await screen.findByText(/erro_no_envio/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/payload \[mensagem\]/i)).toHaveValue("Mensagem de teste");
    expect(consoleError).toHaveBeenCalled();
  });
});
