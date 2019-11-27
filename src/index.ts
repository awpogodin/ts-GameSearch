/* eslint-disable no-console */
import './styles/index.css';

import games from './db';

const searchInput: HTMLInputElement | null = document.querySelector('.js-search-input');
const clearBtn: HTMLElement | null = document.querySelector('.js-clear-btn');

if (clearBtn) {
  clearBtn.addEventListener('click', (e: Event): void => {
    e.preventDefault();
    console.log(games);
    if (searchInput) {
      searchInput.value = '';
    }
  });
}
