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

  setX(x: number) {
    this.x = x;

    return this;
  }

  setY(y: number) {
    this.y = y;

    return this;
  }

  translate(x: number, y: number) {
    this.set(this.x + x, this.y + y);

    return this;
  }

  translateX(x: number) {
    this.setX(this.x + x);

    return this;
  }

  translateY(y: number) {
    this.setY(this.y + y);

    return this;
  }

  static get zero() {
    return new Vector2D(0, 0);
  }
}
