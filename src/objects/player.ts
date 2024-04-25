import { Input } from "@/objects/input";
import { Vector2D } from "@/objects/vector-2d";
import { MonoBehaviour } from "@/objects/mono-behaviour";
import { Collider } from "@/objects/collider";

export class Player extends MonoBehaviour {
  public speed: number = 0.25;
  public collider: Collider = new Collider(
    new Vector2D(30, 30),
    new Vector2D(0, 0)
  );

  public update(deltaTime: number): void {
    const direction = new Vector2D(
      Input.getAxis("horizontal"),
      Input.getAxis("vertical")
    ).normalized;

    this.collider.position.translate(
      direction.x * this.speed * deltaTime,
      direction.y * this.speed * deltaTime
    );
  }

  public fixedUpdate(): void {}

  public draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = "blue";
    context.fillRect(
      this.collider.position.x,
      this.collider.position.y,
      this.collider.size.x,
      this.collider.size.y
    );
  }
}
