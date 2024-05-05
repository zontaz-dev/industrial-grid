import { Input } from "@/objects/input";
import { Vector2D } from "@/objects/vector-2d";
import { MonoBehaviour } from "@/objects/mono-behaviour";
import { Collider } from "@/objects/collider";

export class Player extends MonoBehaviour {
  private speed: number = 0.25;
  private collider: Collider;

  constructor(collider: Collider) {
    super();

    this.collider = collider;
  }

  update(deltaTime: number) {
    const direction = new Vector2D(
      Input.getAxis("horizontal"),
      Input.getAxis("vertical")
    ).normalized;

    this.collider.position.translateX(direction.x * this.speed * deltaTime);
    const collisionX = this.collider.collisions[0];

    if (collisionX) {
      this.collider.position.setX(
        collisionX.collider.position.x +
          (direction.x > 0 ? -this.collider.size.x : collisionX.collider.size.x)
      );
    }

    this.collider.position.translateY(direction.y * this.speed * deltaTime);
    const collisionY = this.collider.collisions[0];

    if (collisionY) {
      this.collider.position.setY(
        collisionY.collider.position.y +
          (direction.y > 0 ? -this.collider.size.y : collisionY.collider.size.y)
      );
    }
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
