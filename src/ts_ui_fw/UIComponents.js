import { UIComponentStore } from "./UIComponentStore.js";
export class UIComponents {
    static RegisterCustomUIComponent(name, compConst) {
        this.customComponents.push(new UIComponentStore(name, compConst));
        window.customElements.define(name, compConst);
    }
    static GetRegisteredComponent(compConst) {
        return this.customComponents.filter(compConst => compConst);
    }
    static GetRegisteredComponents() {
        return this.customComponents;
    }
}
UIComponents.customComponents = [];
export function RegUIComp(name) {
    return function (target) {
        // UIComponent.arguments.register her blah blah
        UIComponents.RegisterCustomUIComponent(name, target);
    };
}
