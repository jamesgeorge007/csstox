import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Context } from "../../../App";
import Select from "./Select";

test("should invoke the callback when value changes", async () => {
  const setOutputType = jest.fn();
  const contextValue = { setOutputType };

  render(
    <Context.Provider value={contextValue}>
      <Select />
    </Context.Provider>
  );

  await userEvent.selectOptions(screen.getByTestId("select"), ["JSS"]);

  expect(setOutputType).toHaveBeenLastCalledWith("JSS");
});
