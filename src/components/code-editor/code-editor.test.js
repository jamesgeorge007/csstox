import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CodeEditor from "./CodeEditor";

describe("Code Editor", () => {
  test("should show placeholder", () => {
    render(
      <CodeEditor placeholder={"placeholder text"} dataTestId={"test-id"} />
    );

    expect(screen.getByTestId("test-id").placeholder).toBe("placeholder text");
  });

  test("should show initial value", () => {
    render(
      <CodeEditor initialValue={"initial value"} dataTestId={"test-id"} />
    );

    expect(screen.getByTestId("test-id")).toHaveTextContent("initial value");
  });

  test("should make content read only when readOnly prop is true", () => {
    render(
      <CodeEditor
        initialValue={"initial value"}
        readOnly={true}
        dataTestId={"test-id"}
      />
    );

    expect(screen.getByTestId("test-id")).toHaveAttribute("readOnly");
  });

  test("should make content read only when readOnly prop is false", () => {
    render(
      <CodeEditor
        initialValue={"initial value"}
        readOnly={false}
        dataTestId={"test-id"}
      />
    );

    expect(screen.getByTestId("test-id")).not.toHaveAttribute("readOnly");
  });

  test("should call the callback when input changes", async () => {
    const callback = jest.fn();

    render(<CodeEditor valueChanged={callback} dataTestId={"test-id"} />);

    await userEvent.type(screen.getByTestId("test-id"), "ABC");

    expect(callback).toHaveBeenCalledWith("A");
    expect(callback).toHaveBeenCalledWith("AB");
    expect(callback).toHaveBeenLastCalledWith("ABC");
  });

  test("should set the right className based on the type", () => {
    render(
      <div>
        <CodeEditor type={"input"} dataTestId={"input-text-editor"} />
        <CodeEditor dataTestId={"output-text-editor"} />
      </div>
    );

    expect(screen.getByTestId("input-text-editor")).toHaveClass(
      "code code--input"
    );
    expect(screen.getByTestId("output-text-editor")).toHaveClass(
      "code code--output"
    );
  });
});
