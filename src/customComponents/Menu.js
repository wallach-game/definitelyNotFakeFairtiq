import { UIComponents } from "../ts_ui_fw/UIComponents.js";
export class Menu extends HTMLElement {
    constructor() {
        super();
        this.wrapper = document.createElement("a");
        this.state = false;
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML =
            `<div id="wrapper">
            <div>
                <input type="text" placeholder="username"><input id="changeNameButton" type="submit">
            </div>
            <div>
                app lock disables     
                </div>
            <div>
                all input on app
            </div>
            <div>
                <input type="submit" value="APP! lock">
            </div>
            <div>
                menu items 1
            </div>
            <div>
                menu items 1
            </div>
            <div>
                menu items 1
            </div>
</div>
            `;
        this.inititComp();
    }
    changeState() {
        console.log("changing state from menu");
        this.state = !this.state;
        let assign = "";
        assign = this.state ? `${-this.clientWidth}px` : `${0}px`;
        console.log(assign);
        this.style.marginLeft = assign;
        console.log(this);
    }
    inititComp() {
        this.wrapper = this.shadowRoot.getElementById("wrapper");
        this.wrapper.style.backgroundColor = "gray";
        this.style.position = "absolute";
        this.style.marginTop = "-50vh";
        this.style.marginLeft = `${-this.clientWidth}px`;
        this.style.transition = "margin-left 1s ease";
    }
}
UIComponents.RegisterCustomUIComponent("menu-comp", Menu);
