import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Grid
} from './Components/Grid.js';


ReactDOM.render(
  <MuiThemeProvider>
    <Grid />
  </MuiThemeProvider>,
  document.getElementById('root'));
