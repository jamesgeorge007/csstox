import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Context } from "../../../AppContext";
import Select from "./Select";

test("should invoke the callback when value changes", async () => {
  const setOutputType = jest.fn();
  const value = { setOutputType };

  render(
    <Context.Provider value={value}>
      <Select />
    </Context.Provider>
  );

  await userEvent.selectOptions(screen.getByTestId("select"), ["JSS"]);

  expect(setOutputType).toHaveBeenLastCalledWith("JSS");
});
