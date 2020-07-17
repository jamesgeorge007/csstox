import React from "react";
import { storiesOf } from "@storybook/react";
import CodeEditor from "./CodeEditor";

storiesOf("Code Editor", module)
  .add("default", () => {
    return <CodeEditor />;
  })
  .add("with initial value", () => {
    return <CodeEditor initialValue={"initial value"} />;
  })
  .add("read only", () => {
    return <CodeEditor initialValue={"initial value"} readOnly={true} />;
  });
