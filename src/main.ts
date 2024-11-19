import { AppComp } from "./customComponents/app.js";
import { Menu } from "./customComponents/Menu.js";

var appComp: AppComp;
var menuComp: Menu;

Init();


function Init(): void{
    menuComp = new Menu();
    appComp = new AppComp();
}