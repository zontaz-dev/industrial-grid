import { CollisionManager } from "@/objects/collision-manager";
import { Vector2D } from "@/objects/vector-2d";

export class Collider {
  position: Vector2D;
  size: Vector2D;

  private readonly _collisionManager: CollisionManager;

  constructor(collisionManager: CollisionManager) {
    this.position = Vector2D.zero;
    this.size = Vector2D.zero;
    this._collisionManager = collisionManager;

    this._collisionManager.addCollider(this);
  }

  get collisions() {
    return this._collisionManager.getCollisions(this);
  }
}
