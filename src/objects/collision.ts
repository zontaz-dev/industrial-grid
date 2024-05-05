import { Collider } from "./collider";

export class Collision {
  collider: Collider;
  contacts: { x: boolean; y: boolean };

  constructor(collider: Collider, contacts: Collision["contacts"]) {
    this.collider = collider;
    this.contacts = contacts;
  }
}
