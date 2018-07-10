import React from 'react'; // import react modules
import ReactDOM from 'react-dom'; // import react modules for dom
import './index.css'; // import css file
import '../node_modules/mdbootstrap/css/bootstrap.css' // import mdbootstrap css file
import App from './components/App/App'; // import main component 
import registerServiceWorker from './registerServiceWorker'; // import cache helper


ReactDOM.render(<App />, document.getElementById('root')); // render for App component
registerServiceWorker(); // call cache helper