import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// React router is used control link behavior on our singlepage applications
// Import statement needed in order to use the react router
import {
    BrowserRouter as Router
} from 'react-router-dom';

// Must wrap your application component in a router tag (or whatever it was named)
ReactDOM.render(
<Router>
    <App />
</Router>    
, document.getElementById('root'));

