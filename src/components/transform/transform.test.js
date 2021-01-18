import React from "react";
import { render } from "@testing-library/react";

import { Context } from "../../App";
import Transform from "./Transform";

test("should pass right parameters to child components", () => {
  const initialInput = `font-size: 18px;\nline-height: 24px;\ncolor: red;`;

  const { getByTestId } = render(
    <Context.Provider value={{ outputType: "React Native" }}>
      <Transform />
    </Context.Provider>
  );

  const inputTextArea = getByTestId("input");
  const outputTextArea = getByTestId("output");

  expect(inputTextArea).toHaveAttribute("placeholder", initialInput);
  expect(inputTextArea).not.toHaveAttribute("readOnly");

  expect(outputTextArea).not.toHaveAttribute("placeholder");
  expect(outputTextArea).toHaveAttribute("readOnly");
});
