import { UIComponents } from "../ts_ui_fw/UIComponents.js";
import { Menu } from "./Menu.js"
export class HeaderElem extends HTMLElement {

    headerDiv: HTMLElement = document.createElement("a");
    userName: string = "";
    menu: Menu = document.createElement("A") as Menu;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }


    connectedCallback(): void {
        this.shadowRoot!.innerHTML =
            `
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <div id="header">
            <i id="menu-btn" class="material-icons" style="color: white; margin-left:0.5em">menu</i>
            <img src="./src/logo.svg" alt="" srcset="">
            <i class="material-icons" style="color: white; rotate: -15deg; margin-right:0.5em" >notifications</i>
            </div>
            <span id="userName">userName</span>
            `;
            this.initializeComponent();

    }      

    initializeComponent():void{
        
        this.headerDiv = this.shadowRoot!.getElementById("header") as HTMLElement;
        this.headerDiv.style.backgroundColor = "#E21A34";
        this.headerDiv.style.width = "93vw";
        this.headerDiv.style.height = "5em";
        this.headerDiv.style.display = "flex";
        this.headerDiv.style.alignItems = "flex-end";
        this.headerDiv.style.paddingBottom = "0.9em";
        this.headerDiv.style.justifyContent = "space-between";
        this.headerDiv.style.paddingLeft = "1em";
        this.headerDiv.style.paddingRight = "1em";
        this.style.display = "flex";
        this.style.justifyContent = "center";
        this.style.flexDirection = "column";

        this.shadowRoot!.getElementById("userName")!.style.fontSize = "2em";
        this.shadowRoot!.getElementById("userName")!.style.marginLeft = "0.5em";
        this.shadowRoot!.getElementById("userName")!.style.marginTop = "0.4em";

        this.headerDiv.querySelector("img")!.style.height = "30%";
        this.headerDiv.querySelector("img")!.style.marginRight = "calc(100vw/3)";

        this.shadowRoot!.getElementById("menu-btn")!.addEventListener("click",() => { this.MenuClickFnc()});
        this.menu = document.getElementById("menu") as Menu;
    }

    MenuClickFnc()
    {
        //brb
        console.log("trying to change state");
        this.menu.changeState();
    }

    }


UIComponents.RegisterCustomUIComponent("header-comp", HeaderElem);

