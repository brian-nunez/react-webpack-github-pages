import React from "react";
import { Link } from "@reach/router";

export default () => (
  <React.Fragment>
    <div>About</div>
    <Link to="/">
      <button>Back</button>
    </Link>
  </React.Fragment>
);
