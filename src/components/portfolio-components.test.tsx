import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";

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

describe("Navbar", () => {
  it("renders desktop navigation and opens the mobile menu", async () => {
    const user = userEvent.setup();

    render(<Navbar />);

    expect(screen.getByRole("link", { name: /início/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sobre/i })).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", { name: /abrir menu/i });
    await user.click(toggleButton);

    expect(screen.getByRole("dialog", { name: /navegação principal/i })).toBeInTheDocument();
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
    render(<Hero />);

    expect(screen.getByText(/sistemas em/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ver projetos/i })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /entrar em contato/i })).toHaveAttribute("href", "#contact");
  });
});

describe("About", () => {
  it("renders the editorial heading and core metrics", () => {
    render(<About />);

    expect(screen.getByText(/construindo o digital com/i)).toBeInTheDocument();
    expect(screen.getByText(/3\+/i)).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();
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
  });
});

describe("Contact", () => {
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
      expect(fetchMock).toHaveBeenCalledWith(
        "/api/contact",
        expect.objectContaining({
          method: "POST",
        }),
      );
    });

    expect(await screen.findByText(/transmissão_concluída/i)).toBeInTheDocument();
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
});
