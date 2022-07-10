var _a;
import React from 'react';
import ReactDomClient from 'react-dom/client';
var App = function () {
    console.log('Hello World from react !');
    return React.createElement("h1", null, "Hello World from react !");
};
var container = (_a = document.getElementById('app')) !== null && _a !== void 0 ? _a : document.body;
var root = ReactDomClient.createRoot(container);
root.render(React.createElement(App, null));
