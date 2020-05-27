import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Context } from "../../App";
import SelectBox from "./SelectBox";

test("should invoke the callback when value changes", async () => {
  const outputTypeChanged = jest.fn();
  const contextValue = { outputTypeChanged };

  render(
    <Context.Provider value={contextValue}>
      <SelectBox />
    </Context.Provider>
  );

  await userEvent.selectOptions(screen.getByTestId("selectbox"), ["JSS"]);

  expect(outputTypeChanged).toHaveBeenLastCalledWith("JSS");
});
