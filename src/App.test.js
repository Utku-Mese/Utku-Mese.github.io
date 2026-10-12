import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Particle", () => function ParticleMock() {
  return <div id="tsparticles" aria-hidden="true" />;
});

beforeEach(() => {
  window.localStorage.clear();
});

test("renders the refreshed portfolio introduction", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /building thoughtful software/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/software engineer at netaş/i)).toBeInTheDocument();
});

test("switches the interface between English and Turkish", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Türkçe" }));

  expect(
    screen.getByRole("heading", { name: /her ekran için özenli yazılım/i })
  ).toBeInTheDocument();
  expect(window.localStorage.getItem("portfolio-language")).toBe("tr");
  expect(document.documentElement.lang).toBe("tr");
});
