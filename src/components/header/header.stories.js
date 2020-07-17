import React from "react";
import Header from "./Header";
import { Context } from "../../App";
import { storiesOf } from "@storybook/react";

storiesOf("Header", module).add("default", () => {
  const contextValue = { outputType: "JSS" };
  return (
    <Context.Provider value={contextValue}>
      <Header />
    </Context.Provider>
  );
});
