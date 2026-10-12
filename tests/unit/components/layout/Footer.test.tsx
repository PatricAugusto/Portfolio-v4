import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Footer } from "@/components/layout/Footer";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Footer", () => {
  it("renders its content and scrolls to the top when requested", async () => {
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
