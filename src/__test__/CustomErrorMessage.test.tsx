import { render, screen  } from "@testing-library/react";
import '@testing-library/jest-dom'
import { CustomErrorMessage } from "../components/CustomErrorMessage";

test("expected CustomErrorMessage to receive a standard message", async () => {
  render(<CustomErrorMessage message="Estamos passando por um problema interno, volte em breve.." />);
    
  expect(screen.getByText("Estamos passando por um problema interno, volte em breve..")).toBeInTheDocument();
});