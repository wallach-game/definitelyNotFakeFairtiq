import { UIComponents } from "../ts_ui_fw/UIComponents.js";
export class Pill extends HTMLElement {

    textEl: HTMLElement = document.createElement("a");
    public pillText: string  = "initText";

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    public Change():void{
        this.textEl.innerText = this.pillText;
    }


    connectedCallback(): void {
        this.shadowRoot!.innerHTML =
            `
            <span id="pill"></span>
            `;
            this.inititComp();
    }      



    inititComp():void
    {
        this.textEl = this.shadowRoot!.getElementById("pill") as HTMLElement;
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

