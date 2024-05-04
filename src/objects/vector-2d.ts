export class Vector2D {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  get normalized() {
    const mag = this.magnitude;
    return mag > 0
      ? new Vector2D(this.x / mag, this.y / mag)
      : new Vector2D(0, 0);
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;

    return this;
  }

  translate(x: number, y: number) {
    this.set(this.x + x, this.y + y);

    return this;
  }
}
