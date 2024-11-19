import { UIComponents } from "../ts_ui_fw/UIComponents.js";
import { Pill } from "./Pill.js";
export class StationComp extends HTMLElement {

    stationText: HTMLElement = document.createElement("a"); 
    regionText: HTMLElement = document.createElement("a");

    pill: Pill;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.pill = new Pill();
    }


    connectedCallback(): void {
        this.shadowRoot!.innerHTML =
            `
            <p id="stationName">Zlín, Šrámkova</p><pill-comp></pill-comp>
            <p id="regionName">Zlín Region</p>
            `;

        this.initComponent();
    }


    initComponent(): void {
        this.stationText = this.shadowRoot!.getElementById("stationName") as HTMLElement;
        this.stationText.style.display = "inline";
        this.regionText = this.shadowRoot!.getElementById("regionName") as HTMLElement;
        this.style.marginTop = "30em";
    }
}



UIComponents.RegisterCustomUIComponent("station-comp", StationComp);

