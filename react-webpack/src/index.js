import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

console.log('%cReact Test', 'color:#fff;font-size:41px;background:linear-gradient(to right bottom,red,orange,yellow,green,blue,indigo,violet)');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
