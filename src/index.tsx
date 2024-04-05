import React from 'react';
import ReactDOM from 'react-dom/client';

import style from './index.module.scss';
import { App } from './App';

const container: any = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <div className={style.body}>
    <App />
  </div>
);
