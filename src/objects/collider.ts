import { Vector2D } from "./vector-2d";

export class Collider {
  position: Vector2D;
  size: Vector2D;

  constructor(position: Vector2D, size: Vector2D) {
    this.position = position;
    this.size = size;
  }
}
