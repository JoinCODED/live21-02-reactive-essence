/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * DO NOT MODIFY THIS FILE
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { render, fireEvent } from "@testing-library/react";
import App, { USD_TO_EUR_RATE, EUR_TO_USD_RATE } from "./App";

describe("app", () => {
  test("renders correctly", () => {
    const app = render(<App />);

    expect(app.container).toMatchSnapshot();
  });

  test("converts USD to EUR by USD_TO_EUR_RATE", () => {
    const app = render(<App />);

    const usdInput = app.getByPlaceholderText("💵");
    const eurInput = app.getByPlaceholderText("💶");

    let value = 1;
    fireEvent.change(usdInput, { target: { value: value } });
    expect(Number(usdInput.value)).toEqual(value);
    expect(Number(eurInput.value)).toEqual(value * USD_TO_EUR_RATE);

    value = 12;
    fireEvent.change(usdInput, { target: { value: value } });
    expect(Number(usdInput.value)).toEqual(value);
    expect(Number(eurInput.value)).toEqual(value * USD_TO_EUR_RATE);
  });

  test("converts EUR to USD by EUR_TO_USD_RATE", () => {
    const app = render(<App />);

    const usdInput = app.getByPlaceholderText("💵");
    const eurInput = app.getByPlaceholderText("💶");

    let value = 1;
    fireEvent.change(eurInput, { target: { value: value } });
    expect(Number(eurInput.value)).toEqual(value);
    expect(Number(usdInput.value)).toEqual(value * EUR_TO_USD_RATE);

    value = 12;
    fireEvent.change(eurInput, { target: { value: value } });
    expect(Number(eurInput.value)).toEqual(value);
    expect(Number(usdInput.value)).toEqual(value * EUR_TO_USD_RATE);
  });
});
