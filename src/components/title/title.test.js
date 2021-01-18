import React from "react";
import { render, screen } from "@testing-library/react";

import Title from "./Title";
import { Context } from "../../AppContext";

test("should show the output type", () => {
  const value = { outputType: "JSS" };
  render(
    <Context.Provider value={value}>
      <Title />
    </Context.Provider>
  );

  expect(screen.getByTestId("output-type")).toHaveTextContent("JSS");
});
