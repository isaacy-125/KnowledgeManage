import './css/style.css';
import './css/blue.scss';
// 导入hello 模块 往id为root的dom增加dom
// const hello = require('./hello')

// document.querySelector('#root').appendChild(hello());

import React from 'react';
import { render } from 'react-dom';
import Hello from './hello';

render(<Hello />, document.getElementById('root'))