export class Vector2D {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public set(x: number, y: number): Vector2D {
    this.x = x;
    this.y = y;

    return this;
  }

  public translate(x: number, y: number): Vector2D {
    this.set(this.x + x, this.y + y);

    return this;
  }

  public get magnitude(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  public get normalized(): Vector2D {
    const mag = this.magnitude;
    return mag > 0
      ? new Vector2D(this.x / mag, this.y / mag)
      : new Vector2D(0, 0);
  }
}
