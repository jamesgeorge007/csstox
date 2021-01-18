import React, { useContext } from "react";

import "./header.scss";
import Select from "./select/Select";
import { Context } from "../../App";

const Header = () => {
  const { outputType } = useContext(Context);

  return (
    <header>
      <div className="header-wrapper">
        <div>
          <h1>
            CSS to &nbsp;
            <Select />
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
      </div>
    </header>
  );
};

export default Header;
