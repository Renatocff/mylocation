import { render, screen  } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Container } from "../components/Container";

test("expected the container to receive a child element", async () => {
  render(<Container><div data-testid="elemento">Elemento para teste</div></Container>);
    
  expect(screen.getByTestId("elemento")).toBeInTheDocument();
});