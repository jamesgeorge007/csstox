import React from "react";
import { render, screen } from "@testing-library/react";

import Output from "./Output";

describe("Output", () => {
  const testId = "output";
  test("content should not be editable", () => {
    render(<Output />);

    expect(screen.getByTestId(testId)).toHaveAttribute("readOnly");
  });

  test("has the expected classes", () => {
    render(<Output />);

    expect(screen.getByTestId(testId)).toHaveClass("code code--output");
  });
});
