import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  GridListExampleSimple
} from './Components/Grid.js';


ReactDOM.render(
  <MuiThemeProvider>
    <GridListExampleSimple />
  </MuiThemeProvider>,
  document.getElementById('root'));
