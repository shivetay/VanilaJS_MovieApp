'use strict';

import { getMovies } from './scripts/server_methods';

import './main.scss';

const app = {
  /* listen for photo load */
  loadMovies: function () {
    document.addEventListener('DOMContentLoaded', getMovies);
  },

  /* app init */
  init: function () {
    console.log('*** App starting ***');
    this.loadMovies();
  },
};

app.init();
