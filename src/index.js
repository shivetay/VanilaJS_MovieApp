'use strict';

import { getMovies, changePage } from './scripts/server_methods';

import './main.scss';

const app = {
  /* listen for photo load */
  loadMovies: function (id) {
    document.addEventListener('DOMContentLoaded', getMovies(id));
  },

  renderPagination: function () {
    const thisApp = this;
    thisApp.btn = document.querySelectorAll('.btn');

    for (let btn of this.btn) {
      btn.addEventListener('click', changePage);
    }
  },

  /* app init */
  init: function () {
    console.log('*** App starting ***');
    this.loadMovies();
    this.renderPagination();
  },
};

app.init();
