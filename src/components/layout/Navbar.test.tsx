import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Navbar } from "./Navbar";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Navbar", () => {
  it("renders navigation and opens the accessible mobile menu", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    expect(screen.getByRole("link", { name: /início/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sobre/i })).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", { name: /abrir menu/i });
    await user.click(toggleButton);

    expect(screen.getByRole("dialog", { name: /navegação principal/i })).toHaveAttribute(
      "aria-modal",
      "true",
    );
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(document.body).toHaveStyle({ overflow: "hidden" });
  });

  it("updates its appearance after scrolling", () => {
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

  it("closes the mobile menu with Escape and restores focus", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggleButton = screen.getByRole("button", { name: /abrir menu/i });
    await user.click(toggleButton);
    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "false");
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
      expect(screen.getByRole("button", { name: /abrir menu/i })).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });
    expect(document.body).not.toHaveStyle({ overflow: "hidden" });
  });
});
