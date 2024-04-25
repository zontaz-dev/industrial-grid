export abstract class MonoBehaviour {
  public abstract update(deltaTime: number): void;
  public abstract fixedUpdate(timeStep: number): void;
  public abstract draw(context: CanvasRenderingContext2D): void;
}
