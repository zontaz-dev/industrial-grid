import { Input } from "@/objects/input";
import { Vector2D } from "@/objects/vector-2d";
import { MonoBehaviour } from "@/objects/mono-behaviour";
import { Collider } from "@/objects/collider";

export class Player extends MonoBehaviour {
  speed: number = 0.25;
  collider: Collider;

  constructor() {
    super();

    this.collider = new Collider(new Vector2D(0, 0), new Vector2D(30, 30));
  }

  update(deltaTime: number) {
    const direction = new Vector2D(
      Input.getAxis("horizontal"),
      Input.getAxis("vertical")
    ).normalized;

    this.collider.position.translate(
      direction.x * this.speed * deltaTime,
      direction.y * this.speed * deltaTime
    );
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "blue";
    context.fillRect(
      this.collider.position.x,
      this.collider.position.y,
      this.collider.size.x,
      this.collider.size.y
    );
  }
}
