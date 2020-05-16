import React from "react";
import { render } from "@testing-library/react";

jest.mock("../code-editor/CodeEditor", () => (props) => {
  return (
    <textarea
      data-testid="code-editor"
      data-initial-value={props.initialValue}
      data-placeholder={props.placeholder}
      data-type={props.type}
      readOnly={props.readOnly}
    />
  );
});

import Transform from "./Transform";
import { Context } from "../../App";

test("should pass right parameters to child components", () => {
  const contextValue = {
    inputCss: "input css",
    outputCss: "output css",
    inputCssChanged: jest.fn(),
  };

  const { getAllByTestId } = render(
    <Context.Provider value={contextValue}>
      <Transform />
    </Context.Provider>
  );

  const firstCodeEditor = getAllByTestId("code-editor")[0];

  expect(firstCodeEditor).toHaveAttribute(
    "data-placeholder",
    contextValue.inputCss
  );
  expect(firstCodeEditor).toHaveAttribute("data-initial-value", "");
  expect(firstCodeEditor).toHaveAttribute("data-type", "input");
  expect(firstCodeEditor).not.toHaveAttribute("readOnly");

  const secondCodeEditor = getAllByTestId("code-editor")[1];
  expect(secondCodeEditor).not.toHaveAttribute("data-placeholder");
  expect(secondCodeEditor).toHaveAttribute("data-initial-value", "output css");
  expect(secondCodeEditor).toHaveAttribute("data-type", "output");
  expect(secondCodeEditor).toHaveAttribute("readOnly");
});
