import React from "react";
import { render, screen } from "@testing-library/react";

import { Context } from "../../App";
import Header from "./Header";

test("should show the message with proper output type", () => {
  const contextValue = { outputType: "JSS" };
  render(
    <Context.Provider value={contextValue}>
      <Header />
    </Context.Provider>
  );

  expect(screen.getByTestId("header-message")).toHaveTextContent(
    "Easily convert CSS text to JSS stylesheet objects."
  );
});
