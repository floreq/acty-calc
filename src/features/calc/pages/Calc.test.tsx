import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calc from "./Calc";

it("displays correct bolus value", async () => {
  act(() => {
    render(<Calc />);
  });

  const weightInput = screen.getByDisplayValue("60");

  userEvent.type(weightInput, "90");

  const bolus = screen.getByText("common:calc.bolus 8.1");

  expect(bolus).toBeTruthy();
});

it("displays correct syringes dosage", async () => {
  act(() => {
    render(<Calc />);
  });

  const weightInput = screen.getByDisplayValue("60");

  userEvent.type(weightInput, "88");

  const firstSyringe = screen.getByText("50 ml");
  const secondSyringe = screen.getByText("21.3 ml");

  expect(firstSyringe).toBeTruthy();
  expect(secondSyringe).toBeTruthy();
});

// it("displays correct calculated dose operations", async () => {
//   render(<Calc />);

//   const weightInput = screen.getByDisplayValue("60");
//   const operationsAccordion = screen.getByText("common:calc.operations");

//   userEvent.type(weightInput, "88");
//   userEvent.click(operationsAccordion);

//   const firstOperation = screen.getByText("88 · 0.9 = 79.2");
//   const secondOperation = screen.getByText("79.2 · 10% = 7.9");
//   const firthOperation = screen.getByText("79.2 - 7.9 = 71.3");

//   expect(firstOperation).toBeTruthy();
//   expect(secondOperation).toBeTruthy();
//   expect(firthOperation).toBeTruthy();
// });
