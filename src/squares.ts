import { Game, Constants, GameConfig } from 'tsgfw/core';
import { MainScene } from './scenes/main-scene.ts';

// Define the default game configs
const config = new GameConfig(
    Constants.CONTEXT_CANVAS,
    640,
    360
);

// Initalise the game and start the loop
const gameContainer = new Game(config);

export { gameContainer };

export default () => {
    const mainScene = new MainScene();
    gameContainer.scenes.push(mainScene);

    gameContainer.run();
};
