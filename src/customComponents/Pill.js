import { UIComponents } from "../ts_ui_fw/UIComponents.js";
export class Pill extends HTMLElement {
    constructor() {
        super();
        this.textEl = document.createElement("a");
        this.pillText = "initText";
        this.attachShadow({ mode: 'open' });
    }
    Change() {
        this.textEl.innerText = this.pillText;
    }
    connectedCallback() {
        this.shadowRoot.innerHTML =
            `
            <span id="pill"></span>
            `;
        this.inititComp();
    }
    inititComp() {
        this.textEl = this.shadowRoot.getElementById("pill");
        this.textEl.style.backgroundColor = "gray";
        this.textEl.style.fontSize = "0.75em";
        this.textEl.style.color = "lightGray";
        this.textEl.style.padding = "0.3em";
        this.textEl.style.borderRadius = "1em";
        this.style.display = "inline";
        this.pillText = "Change";
        this.Change();
    }
}
UIComponents.RegisterCustomUIComponent("pill-comp", Pill);
