import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const buttons = {
  margin: "1rem"
};

const backgroundImage = {
  height: "300",
  clear: "both",
  paddingTop: "120",
  textAlign: "center",
  borderRadius: 0
};

function Jumbotron({ children }) {
  return (
    <div style={backgroundImage} className="jumbotron">
      {children}

      <Link to="/search">
        <button style={buttons} type="button" className="btn btn-secondary">
          Search for Books
        </button>
      </Link>
      <Link to="/saved">
        <button style={buttons} type="button" className="btn btn-secondary">
          Saved Books
        </button>
      </Link>
    </div>
  );
}

export default Jumbotron;
