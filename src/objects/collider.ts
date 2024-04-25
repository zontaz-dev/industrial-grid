import { Vector2D } from "./vector-2d";

export class Collider {
  private _position: Vector2D;
  private _size: Vector2D;

  public constructor(position: Vector2D, size: Vector2D) {
    this._position = position;
    this._size = size;
  }

  public get position() {
    return this._position;
  }

  public get size() {
    return this._size;
  }
}
