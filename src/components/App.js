import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './SearchForm';

const App = () => (
  <MuiThemeProvider>
    <Form />
  </MuiThemeProvider>
);

export default App;

