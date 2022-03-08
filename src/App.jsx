import React from "react";
import { Link } from "@reach/router";

export default () => (
  <React.Fragment>
    <div>Home</div>
    <Link to="/about">
      <button>Next</button>
    </Link>
    <Link to="/path/of/unknown/route">
      <button>Some Place?</button>
    </Link>
  </React.Fragment>
);
