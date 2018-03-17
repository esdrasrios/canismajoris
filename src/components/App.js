import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import VideoBg from "./VideoBg";
import Header from "./Header";
import Footer from "./Footer";

import Form from "./SearchForm";
import Results from "./SearchResults";

const App = () => (
  <div className="container">
    <VideoBg />
    <MuiThemeProvider>
      <Header />
      <Form />
      <Results />
      <Footer />
    </MuiThemeProvider>
  </div>
);

export default App;
