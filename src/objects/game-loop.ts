type FixedUpdateFunction = (timeStep: number) => void;
type UpdateFunction = (deltaTime: number) => void;
type DrawFunction = () => void;

export class GameLoop {
  private lastFrameTime: number = 0;
  private accumulatedTime: number = 0;
  private timeStep: number = 1000 / 60;
  private isRunning: boolean = false;

  private readonly update: UpdateFunction;
  private readonly fixedUpdate: FixedUpdateFunction;
  private readonly draw: DrawFunction;

  constructor(
    update: UpdateFunction,
    fixedUpdate: FixedUpdateFunction,
    draw: DrawFunction
  ) {
    this.update = update;
    this.fixedUpdate = fixedUpdate;
    this.draw = draw;
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      requestAnimationFrame(this.loop);
    }
  }

  private loop = (timestamp: number) => {
    if (!this.isRunning) return;

    const deltaTime = timestamp - this.lastFrameTime;

    this.lastFrameTime = timestamp;
    this.accumulatedTime += deltaTime;

    while (this.accumulatedTime >= this.timeStep) {
      this.fixedUpdate(this.timeStep);
      this.accumulatedTime -= this.timeStep;
    }

    this.update(deltaTime);
    this.draw();

    requestAnimationFrame(this.loop);
  };
}
