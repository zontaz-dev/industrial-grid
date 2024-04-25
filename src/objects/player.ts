import { Input } from "@/objects/input";
import { Vector2D } from "@/objects/vector-2d";
import { MonoBehaviour } from "@/objects/mono-behaviour";

export class Player extends MonoBehaviour {
  public position: Vector2D = new Vector2D(0, 0);
  public speed: number = 0.25;

  public update(deltaTime: number): void {
    const direction = new Vector2D(
      Input.getAxis("horizontal"),
      Input.getAxis("vertical")
    ).normalized;

    this.position.translate(
      direction.x * this.speed * deltaTime,
      direction.y * this.speed * deltaTime
    );
  }

  public fixedUpdate(): void {}

  public draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = "blue";
    context.fillRect(this.position.x, this.position.y, 30, 30);
  }
}
