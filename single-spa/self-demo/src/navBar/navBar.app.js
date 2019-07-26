import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import NavBar from './root.component';

function domElementGetter() {
    return document.getElementById('navBar');
}

export const navBar = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: NavBar,
    domElementGetter,
});
