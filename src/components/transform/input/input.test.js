import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from "./Input";

describe("Input", () => {
  test("should show placeholder", () => {
    render(<Input placeholder={"placeholder text"} />);

    expect(screen.getByTestId("input").placeholder).toBe("placeholder text");
  });

  test("content should be editable", () => {
    render(<Input />);

    expect(screen.getByTestId("input")).not.toHaveAttribute("readOnly");
  });

  test("should invoke the callback when input changes", async () => {
    const callback = jest.fn();

    render(<Input setInputValue={callback} />);

    await userEvent.type(screen.getByTestId("input"), "ABC");

    expect(callback).toHaveBeenCalledWith("A");
    expect(callback).toHaveBeenCalledWith("AB");
    expect(callback).toHaveBeenLastCalledWith("ABC");
  });

  test("has the expected classes", () => {
    render(<Input />);

    expect(screen.getByTestId("input")).toHaveClass("code code--input");
  });
});
