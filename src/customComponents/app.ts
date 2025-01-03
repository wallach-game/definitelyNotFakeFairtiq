import { UIComponents } from "../ts_ui_fw/UIComponents.js";
import { HeaderElem } from "./Header.js";
import { SliderComp } from "./slider.js";
import { StationComp } from "./StationComp.js";
export class AppComp extends HTMLElement {

    sliderComp: SliderComp;
    stationComp: StationComp;
    headerComp: HeaderElem;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.sliderComp = new SliderComp();
        this.stationComp = new StationComp();
        this.headerComp = new HeaderElem();
    }


    connectedCallback(): void {
        this.shadowRoot!.innerHTML =
            `
            <header-comp></header-comp>
            <station-comp></station-comp>
            <slider-comp></slider-comp>
            `;
            this.initializeComponent();
    }

    initializeComponent()
    {
        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.justifyContent = "space-between";
        this.style.alignItems = "center";
        this.style.height = "85vh";
    }

}

UIComponents.RegisterCustomUIComponent("app-comp", AppComp);

