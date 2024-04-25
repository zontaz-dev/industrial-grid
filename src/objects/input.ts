export class Input {
  private static readonly keysDown: string[] = [];

  public static initialize(): void {
    window.addEventListener("keydown", (e) => {
      !this.keysDown.find((k) => k === e.key) && this.keysDown.push(e.key);
    });
    window.addEventListener("keyup", (e) => {
      this.keysDown.splice(
        this.keysDown.findIndex((k) => k === e.key),
        1
      );
    });
  }

  public static getKeyDown(key: string): boolean {
    return Boolean(this.keysDown.find((k) => k === key));
  }

  public static getAxis(axis: "horizontal" | "vertical"): number {
    if (axis === "horizontal") {
      return (Input.getKeyDown("a") ? -1 : 0) + (Input.getKeyDown("d") ? 1 : 0);
    } else {
      return (Input.getKeyDown("w") ? -1 : 0) + (Input.getKeyDown("s") ? 1 : 0);
    }
  }
}
