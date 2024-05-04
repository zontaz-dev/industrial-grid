export abstract class MonoBehaviour {
  update(deltaTime: number): void {}
  fixedUpdate(timeStep: number): void {}
  draw(context: CanvasRenderingContext2D): void {}
}
