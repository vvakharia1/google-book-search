import React from "react";
import Search from "./pages/Search";
import Landing from "./pages/Home";

// routes
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
