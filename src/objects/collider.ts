import { Vector2D } from "./vector-2d";

export class Collider {
  public size: Vector2D;
  public position: Vector2D;

  public constructor(size: Vector2D, position: Vector2D) {
    this.size = size;
    this.position = position;
  }
}
