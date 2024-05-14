import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("should render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("Machado")).toBeInTheDocument();
    expect(getByText("Mauro")).toBeInTheDocument();
    expect(getByText("Felix")).toBeInTheDocument();
  });

  it("should be able to add new item to the  list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<App />);

    const addButton = getByText("Adicionar");
    const inputElement = getByPlaceholderText("novo item");

    await userEvent.type(inputElement, "novo");

    await userEvent.click(addButton);

    await waitFor(() => {
      expect(getByText("novo")).toBeInTheDocument();
    });

    //our

    // expect(await findByText("novo")).toBeInTheDocument();
  });

  it("should be able to remove item from the  list", async () => {
    const { getByText, getAllByText } = render(<App />);

    const removeButtons = getAllByText("Remover");

    userEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return getByText("Machado");
    });
  });
});
