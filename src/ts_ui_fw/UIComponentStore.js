import { MurMurHash } from "./MurMurHash.js";
export class UIComponentStore {
    constructor(name, constructor) {
        this.name = name;
        this.nameHash = MurMurHash.ToHash(name);
        this.const = constructor;
    }
}
