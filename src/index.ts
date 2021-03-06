/* eslint-disable no-console */
import './styles/styles.scss';

import games from './db';
import Game from './interfaces/Game.interface';
import GameCard from './classes/GameCard.class';

const searchInput: HTMLInputElement | null = document.querySelector('.js-search-input');
const clearBtn: HTMLElement | null = document.querySelector('.js-clear-btn');
const searchBtn: HTMLElement | null = document.querySelector('.js-search-btn');
const app: HTMLElement | null = document.querySelector('.app');

if (clearBtn) {
  clearBtn.addEventListener('click', (e: Event): void => {
    e.preventDefault();
    if (searchInput) {
      searchInput.value = '';
    }
    if (app) app.innerHTML = '';
  });
}

if (searchBtn) {
  searchBtn.addEventListener('click', (e: Event): void => {
    e.preventDefault();
    console.log(games);
    if (searchInput) {
      const game: Game | undefined = games.find(item => {
        if (item.name === searchInput.value) return item;
        return undefined;
      });
      if (game && app) {
        // eslint-disable-next-line no-new
        new GameCard(app, game);
      }
    }
  });
}
