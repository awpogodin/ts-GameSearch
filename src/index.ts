/* eslint-disable no-console */
import './styles/index.css';

import games from './db';

interface Game {
  name: string;
  developer: string;
  platforms: string;
}

class GameCard {
  constructor(wrapper: HTMLElement, public game: Game) {
    const template: HTMLTemplateElement | null = document.querySelector('#gameCard');
    if (template) {
      const content: DocumentFragment = document.importNode(template.content, true);

      const gameTitle: HTMLElement | null = content.querySelector('.js-game-title');
      const gameDeveloper: HTMLElement | null = content.querySelector('.js-game-developer');
      const gamePlatforms: HTMLElement | null = content.querySelector('.js-game-platforms');

      if (gameTitle) gameTitle.innerHTML = this.game.name;
      if (gameDeveloper) gameDeveloper.innerHTML = this.game.developer;
      if (gamePlatforms) gamePlatforms.innerHTML = this.game.platforms;

      wrapper.appendChild(content);
    }
  }
}

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
