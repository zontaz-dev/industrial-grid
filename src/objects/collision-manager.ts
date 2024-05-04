import { Collider } from "./collider";

export class CollisionManager {
  private readonly colliders: Collider[] = [];

  addCollider(collider: Collider) {
    this.colliders.push(collider);
  }

  collides(collider: Collider) {
    return this.colliders.filter(
      (c) =>
        c.position.y + c.size.y > collider.position.y &&
        c.position.y < collider.position.y + collider.size.y &&
        c.position.x + c.size.x > collider.position.x &&
        c.position.x < collider.position.x + collider.size.x
    );
  }
}
