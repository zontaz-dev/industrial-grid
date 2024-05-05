import { Collider } from "@/objects/collider";
import { MonoBehaviour } from "@/objects/mono-behaviour";

export class Block extends MonoBehaviour {
  collider: Collider;

  constructor(collider: Collider) {
    super();

    this.collider = collider;
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
