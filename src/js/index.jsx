/**
 * @file  root for all
 */

import React from 'react';
import { render } from 'react-dom';
import FormComponent from './components/FormComponent.jsx';

import 'babel-polyfill';

let root = document.querySelector('body');
let leaf = document.createElement('div');
root.appendChild(leaf);

render(<FormComponent/>, leaf);
