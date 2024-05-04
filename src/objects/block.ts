import { Collider } from "./collider";
import { MonoBehaviour } from "./mono-behaviour";
import { Vector2D } from "./vector-2d";

export class Block extends MonoBehaviour {
  collider: Collider;

  constructor() {
    super();

    this.collider = new Collider(new Vector2D(100, 100), new Vector2D(30, 30));
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "red";
    context.fillRect(
      this.collider.position.x,
      this.collider.position.y,
      this.collider.size.x,
      this.collider.size.x
    );
  }
}
