import { UIComponents } from "../ts_ui_fw/UIComponents.js";
import { Pill } from "./Pill.js";
export class StationComp extends HTMLElement {
    constructor() {
        super();
        this.stationText = document.createElement("a");
        this.regionText = document.createElement("a");
        this.attachShadow({ mode: 'open' });
        this.pill = new Pill();
    }
    connectedCallback() {
        this.shadowRoot.innerHTML =
            `
            <p id="stationName">Zlín, Šrámkova</p><pill-comp></pill-comp>
            <p id="regionName">Zlín Region</p>
            `;
        this.initComponent();
    }
    initComponent() {
        this.stationText = this.shadowRoot.getElementById("stationName");
        this.stationText.style.display = "inline";
        this.regionText = this.shadowRoot.getElementById("regionName");
        this.style.marginTop = "30em";
    }
}
UIComponents.RegisterCustomUIComponent("station-comp", StationComp);
