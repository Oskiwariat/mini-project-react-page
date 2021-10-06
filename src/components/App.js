import React from "react";

import Header from "./Header";
import Page from "./Page";

import "../styles/App.css";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <>
        <header>
          <Header />
        </header>
        <main>
          <Page />
        </main>
      </>
    </Router>
  );
};

export default App;
