import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: vi.fn(),
});

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
  writable: true,
  value: vi.fn(),
});

Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  writable: true,
  value: vi.fn(() => ({
    clearRect: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    fillStyle: "",
    strokeStyle: "",
  })),
});
