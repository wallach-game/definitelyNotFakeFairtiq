import { UIComponents } from "../ts_ui_fw/UIComponents.js";
export class SliderComp extends HTMLElement {

    box: HTMLElement = document.createElement("a");
    kolo: HTMLElement = document.createElement("a");
    state: boolean = false;
    sliderWidth: number = 0;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }


    connectedCallback(): void {
        this.shadowRoot!.innerHTML =
            `
             <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<div id="box">
    <div id="kolo">
    <div>
    <i class="material-icons">chevron_right</i>
    </div>
    </div>
    <div id="intoText" style="position: absolute; display: flex; flex-direction: column; align-items: flex-end; width: 100%; margin-left: -4em; z-index: 0">
        <span>Slide to start</span>
        <span>subject to charge</span>
    </div>
</div>
`;
        this.initComponent();
        this.addEventListener("click", () => {
            this.toggleState();
        })
    }


    toggleState(): void {
        this.state = !this.state;
        console.log(`${parseFloat(this.box.style.width) - 1.9}em`);
        this.kolo.style.marginLeft = this.state ? `calc(${this.sliderWidth}px - 3.8em)` : "0.1em";
        this.kolo.querySelector("div")!.style.rotate = this.state ? "180deg" : "0deg";
    }


    initComponent(): void {
        this.box = this.shadowRoot!.getElementById("box") as HTMLElement;
        this.kolo = this.shadowRoot!.getElementById("kolo") as HTMLElement;
        this.box.style.width = "90vw";
        this.sliderWidth = this.box.clientWidth;
        this.box.style.height = "4em";
        this.box.style.backgroundColor = "lightGray";
        this.box.style.borderRadius = "4em";
        this.box.style.display = "flex";
        this.box.style.alignItems = "center";



        this.kolo.style.backgroundColor = "white";
        this.kolo.style.borderRadius = "50%";
        this.kolo.style.width = "3.6em";
        this.kolo.style.height = "3.6em";
        this.kolo.style.marginLeft = "0.2em";
        this.kolo.style.zIndex = "1";
        this.kolo.style.display = "flex";
        this.kolo.style.alignItems =  "center";
        this.kolo.style.justifyContent = "center";
        this.kolo.querySelector("div")!.style.width = "90%";
        this.kolo.querySelector("div")!.style.height = "90%";
        this.kolo.querySelector("div")!.style.color = "White";
        this.kolo.querySelector("div")!.style.backgroundColor = "#00B16B";
        this.kolo.querySelector("div")!.style.display = "flex";
        this.kolo.querySelector("div")!.style.alignItems = "center";
        this.kolo.querySelector("div")!.style.justifyContent = "center";
        this.kolo.querySelector("div")!.style.fontSize = "2em";
        this.kolo.querySelector("div")!.style.rotate = "";
        this.kolo.querySelector("div")!.style.borderRadius = "4em";
        this.kolo.querySelector("div")!.style.transition = "rotate 1s ease";





        this.kolo.style.transition = "margin 1s ease";
    }
}


UIComponents.RegisterCustomUIComponent("slider-comp", SliderComp);