import Game from '../interfaces/Game.interface';

export default class GameCard {
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
