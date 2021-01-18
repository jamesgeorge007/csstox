import React from "react";
import { render, screen } from "@testing-library/react";

import { Context } from "../../AppContext";
import Header from "./Header";

test("should show the message with proper output type", () => {
  const value = { outputType: "JSS" };
  render(
    <Context.Provider value={value}>
      <Header />
    </Context.Provider>
  );

  expect(screen.getByTestId("header-message")).toHaveTextContent(
    "Easily convert CSS text to JSS stylesheet objects."
  );
});
