'use strict';

import { getMovies } from './scripts/server_methods';

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
      btn.addEventListener('click', this.changePage);
    }
  },

  changePage: function (e) {
    e.preventDefault();
    const thisApp = this;
    thisApp.currentPage = 1;
    thisApp.first = document.getElementById('first');
    thisApp.back = document.getElementById('back');
    thisApp.next = document.getElementById('next');
    console.log(thisApp.currentPage);

    if (e.target.innerHTML == 'First') {
      thisApp.currentPage = 1;
      // getMovies(currentPage);
      this.loadMovies(thisApp.currentPage);
      console.log(thisApp.currentPage);
    } else if (e.target.innerHTML == 'Next') {
      thisApp.currentPage++;
      // getMovies(currentPage);
      this.loadMovies(thisApp.currentPage);
      console.log(thisApp.currentPage);
    } else {
      thisApp.currentPage--;
      // getMovies(currentPage);
      this.loadMovies(thisApp.currentPage);
      console.log(thisApp.currentPage);
    }

    if (thisApp.currentPage === 1 || thisApp.currentPage <= 0) {
      thisApp.first.disabled = true;
    }
    console.log(thisApp.currentPage);

    return thisApp.currentPage;
  },

  currentPage: function () {},

  /* app init */
  init: function () {
    console.log('*** App starting ***');
    this.loadMovies();
    this.renderPagination();
  },
};

app.init();
