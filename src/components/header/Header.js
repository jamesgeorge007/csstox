import React, { useContext } from "react";

import "./header.scss";
import SelectBox from "../select-box/SelectBox";
import { Context } from "../../App";

const Header = () => {
  const { outputType } = useContext(Context);

  return (
    <header className="header">
      <div>
        <h1>
          CSS to &nbsp;
          <SelectBox />
        </h1>
        <br />
      </div>
      <div>
        <p data-testid="header-message">
          Easily convert CSS text to {outputType} stylesheet objects.
        </p>
        <p>
          &copy; 2020{" "}
          <a
            href="https://github.com/jamesgeorge007"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            James George{" "}
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
