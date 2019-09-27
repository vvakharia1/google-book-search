import React from "react";

const navstyle = {
  backgroundColor: "#D9002A"
};

function Nav() {
  return (
    <nav style={navstyle} className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        (React) Google Book Search
      </a>
    </nav>
  );
}

export default Nav;
