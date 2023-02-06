// import odinLogo from "../assets/images/odin_logo.svg";

import loadSecondPage from "./place_ships_page";
import { initPlayers } from "../object/game_control";

const firstPage = (function initFirstPage() {

    function makeHeader() {
        const body = document.querySelector("body");
        const header = document.createElement("header");
        body.appendChild(header);
    }

    function makeHeaderContent() {
        const header = document.querySelector("header");
        const h1 = document.createElement("h1");
        h1.textContent = "BATTLESHIP";
        h1.setAttribute("class", "firstPage");
        h1.setAttribute("title", "BATTLESHIP");
        header.appendChild(h1);
    }

    function makeMain() {
        const body = document.querySelector("body");
        const main = document.createElement("main");
        body.appendChild(main);
    }

    // function createFormInputs({id, labelText, type, pattern, minLength, maxLength}) {
    //     const para = document.createElement("p");
    //     const label = document.createElement("label");
    //     label.setAttribute("for", id);
    //     const span = document.createElement('span');
    //     span.textContent = labelText;


    // }

    function startButtonClicked() {
        loadSecondPage();
        initPlayers();
    }

    function createMainContent() {
        const main = document.querySelector("main");
        const startButton = document.createElement("button");
        startButton.textContent = "Start Game";
        startButton.addEventListener("click", startButtonClicked);

        main.appendChild(startButton);
    }

    function makeFooter() {
        const body = document.querySelector("body");
        const footer = document.createElement("footer");
        body.appendChild(footer); 
    }

    function createFooterContent() {
        const footer = document.querySelector("footer");
        const para = document.createElement("p");
        para.textContent = "Created to complete the assignment of The Odin Project.";

        // const linkToOdinProject = document.createElement("a");  // create a link to the odin project website
        // linkToOdinProject.setAttribute("herf", "https://www.theodinproject.com/");
        // const odinLogoImg = new Image();  // creating the logo of the odin project
        // odinLogoImg.setAttribute("title", "The Odin Project Logo");
        // odinLogoImg.src = odinLogo;

        // linkToOdinProject.appendChild(odinLogoImg);
        // para.appendChild(linkToOdinProject);
        footer.appendChild(para);
    }

    function startFirstPage() {
        makeHeader();
        makeHeaderContent();
        makeMain();
        createMainContent();
        makeFooter();
        createFooterContent();
    }

    return {
        startFirstPage,
    }

})();

const {startFirstPage} = firstPage;

export default startFirstPage;