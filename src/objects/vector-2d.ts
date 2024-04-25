export class Vector2D {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  public get x() {
    return this._x;
  }

  public get y() {
    return this._y;
  }

  public get magnitude(): number {
    return Math.sqrt(this._x ** 2 + this._y ** 2);
  }

  public get normalized(): Vector2D {
    const mag = this.magnitude;
    return mag > 0
      ? new Vector2D(this._x / mag, this._y / mag)
      : new Vector2D(0, 0);
  }

  public set(x: number, y: number): Vector2D {
    this._x = x;
    this._y = y;

    return this;
  }

  public translate(x: number, y: number): Vector2D {
    this.set(this._x + x, this._y + y);

    return this;
  }
}
