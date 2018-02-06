import ReactDOM from 'react-dom';
import React from 'react'; // necessary to import for compilation
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';

require('./globals.scss');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
