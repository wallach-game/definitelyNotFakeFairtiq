import { AppComp } from "./customComponents/app.js";
import { Menu } from "./customComponents/Menu.js";
var appComp;
var menuComp;
Init();
function Init() {
    menuComp = new Menu();
    appComp = new AppComp();
}
