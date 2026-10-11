import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { LiveTerminal } from "./sections/LiveTerminal";
import { Projects } from "./sections/Projects";
import { Stack } from "./sections/Stack";

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Navbar", () => {
  it("renders desktop navigation and opens the mobile menu", async () => {
    const user = userEvent.setup();

    render(<Navbar />);

    expect(screen.getByRole("link", { name: /início/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sobre/i })).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", { name: /abrir menu/i });
    await user.click(toggleButton);

    expect(
      screen.getByRole("dialog", { name: /navegação principal/i }),
    ).toHaveAttribute("aria-modal", "true");
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(document.body).toHaveStyle({ overflow: "hidden" });
  });

  it("updates the header state on scroll", () => {
    const addEventListenerSpy = vi.spyOn(window, "addEventListener");

    render(<Navbar />);

    const scrollHandler = addEventListenerSpy.mock.calls.find(
      ([eventName]) => eventName === "scroll",
    )?.[1] as EventListener | undefined;

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("py-5", "bg-transparent");

    act(() => {
      Object.defineProperty(window, "scrollY", {
        value: 25,
        writable: true,
        configurable: true,
      });
      scrollHandler?.(new Event("scroll"));
    });

    expect(header).toHaveClass("border-b", "bg-black/60");
  });

  it("closes the mobile menu with the Escape key", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggleButton = screen.getByRole("button", { name: /abrir menu/i });
    await user.click(toggleButton);
    expect(screen.getByRole("dialog", { name: /navegação principal/i })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /abrir menu/i })).toHaveAttribute("aria-expanded", "false");
    });
    expect(toggleButton).toHaveFocus();
    expect(document.body).not.toHaveStyle({ overflow: "hidden" });
  });

  it("closes the mobile menu when a section link is selected", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));
    await user.click(screen.getByRole("dialog").querySelector('a[href="#about"]')!);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /abrir menu/i })).toHaveAttribute("aria-expanded", "false");
    });
    expect(document.body).not.toHaveStyle({ overflow: "hidden" });
  });
});

describe("Footer", () => {
  it("renders the footer content and calls scrollToTop on button click", async () => {
    const user = userEvent.setup();
    const scrollTo = vi.spyOn(window, "scrollTo");

    render(<Footer />);

    expect(screen.getAllByText(/Patric Augusto/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/PatricAugusto",
    );

    await user.click(screen.getByRole("button", { name: /sys_top/i }));

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});

describe("Hero", () => {
  it("renders the hero heading and action links", () => {
    const { container } = render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: /software inteligente/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/IA aplicada onde ela realmente agrega valor/i)).toBeInTheDocument();
    expect(screen.getByText("Da ideia ao produto")).toBeInTheDocument();
    expect(screen.getByText("IA com propósito")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ver projetos/i })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /vamos conversar/i })).toHaveAttribute("href", "#contact");
    expect(container.querySelector("canvas")).not.toBeInTheDocument();
  });
});

describe("About", () => {
  it("renders the editorial heading and core metrics", () => {
    render(<About />);

    expect(screen.getByText(/construindo o digital com/i)).toBeInTheDocument();
    expect(screen.getByText("4+")).toBeInTheDocument();
    expect(screen.getByText("300+")).toBeInTheDocument();
    expect(screen.getByText(/full stack/i)).toBeInTheDocument();
  });
});

describe("Projects", () => {
  it("renders featured project cards", () => {
    render(<Projects />);

    expect(screen.getByText(/Buscador de empresas por CNPJ/i)).toBeInTheDocument();
    expect(screen.getByText(/API de Receitas com IA/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Live/i).length).toBeGreaterThan(0);
  });
});

describe("Stack", () => {
  it("renders technology categories and skills", () => {
    render(<Stack />);

    expect(screen.getByText(/Frontend Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Next.js/i)).toBeInTheDocument();
    expect(screen.getByText(/Node.js/i)).toBeInTheDocument();
    expect(screen.getByText(/OpenAI/i)).toBeInTheDocument();
    expect(screen.getByText(/Engenharia Cibernética/i)).toBeInTheDocument();
    expect(screen.getByText(/testes de segurança autorizados/i)).toBeInTheDocument();
    expect(screen.getByText("OWASP ZAP")).toBeInTheDocument();
    expect(screen.getByText("Burp Suite")).toBeInTheDocument();
    expect(screen.getByText("Wazuh")).toBeInTheDocument();
  });
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

  it("submits the form successfully and displays confirmation", async () => {
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

  it("shows an error and retains entered values when the API rejects the request", async () => {
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

describe("LiveTerminal", () => {
  it("executes help and shows terminal output", async () => {
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
    expect(await screen.findByText(/"OWASP ZAP"/, {}, { timeout: 5000 })).toBeInTheDocument();
  });

  it("blocks unknown commands and clears the session for valid commands", async () => {
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
