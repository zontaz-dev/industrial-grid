import { GameLoop } from "@/objects/game-loop";

function update() {}

function fixedUpdate() {}

function draw() {}

const gameLoop = new GameLoop(update, fixedUpdate, draw);

gameLoop.start();
