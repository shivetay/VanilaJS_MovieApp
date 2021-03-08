'use strict';

import { getMovies } from './scripts/server_methods';
// import { ui } from './scripts/UI';
import UI from './scripts/UI';

import './main.scss';

const app = {
  /* listen for photo load */
  loadMovies: function () {
    const thisApp = this;

    document.addEventListener('DOMContentLoaded', getMovies);
  },

  /* app init */
  init: function () {
    console.log('*** App starting ***');
    this.loadMovies();
  },
};

app.init();
