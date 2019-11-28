interface Game {
  name: string;
  developer: string;
  platforms: string;
}

const games: Array<Game> = [
  {
    name: 'GTA 5',
    developer: 'Rockstar Games',
    platforms: 'PC, XBOXONE, PS4, XBOX360, PS3',
  },
  {
    name: 'RDR 2',
    developer: 'Rockstar Games',
    platforms: 'PC, XBOXONE, PS4',
  },
];

export default games;
