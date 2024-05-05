import { GameLoop } from "@/objects/game-loop";
import { Player } from "@/objects/player";
import { MonoBehaviour } from "@/objects/mono-behaviour";
import { Input } from "@/objects/input";
import { Block } from "@/objects/block";
import { Collider } from "@/objects/collider";
import { CollisionManager } from "@/objects/collision-manager";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;

Input.initialize();

const collisionManager = new CollisionManager();

const playerCollider = new Collider(collisionManager);
const player = new Player(playerCollider);
playerCollider.position.set(0, 0);
playerCollider.size.set(30, 30);

const blockCollider = new Collider(collisionManager);
const block = new Block(blockCollider);
blockCollider.position.set(50, 150);
blockCollider.size.set(30, 30);

const gameObjects: MonoBehaviour[] = [block, player];

function update(deltaTime: number) {
  gameObjects.forEach((g) => g.update(deltaTime));
}

function fixedUpdate(timeStep: number) {
  gameObjects.forEach((g) => g.fixedUpdate(timeStep));
}

function draw() {
  context.fillStyle = "rgb(125, 150, 0)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  gameObjects.forEach((g) => g.draw(context));
}

const gameLoop = new GameLoop(update, fixedUpdate, draw);

gameLoop.start();
