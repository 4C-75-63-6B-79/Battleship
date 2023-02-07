import odinLogo from "../../assets/images/odin_logo.svg";
import githubLogo from "../../assets/images/github_logo.svg";

import { makeElement, makeButton, makeImg } from "./html_create_functions";
import loadSecondPage from "./place_ships_page";
import { initPlayers } from "../object/game_control";

const firstPage = (function initFirstPage() {

    function makeHeader() {
        const body = document.querySelector("body");
        const header = makeElement({elementType: "header"});
        body.appendChild(header);
    }

    function makeHeaderContent() {
        const header = document.querySelector("header");
        const h1 = makeElement({elementType: "h1", textContent: "BATTLESHIP", classNames: "firstPage", title: "BATTLESHIP"});
        header.appendChild(h1);
    }

    function makeMain() {
        const body = document.querySelector("body");
        const main = makeElement({elementType: "main"});
        body.appendChild(main);
    }

    function startButtonClicked() {
        initPlayers();
        loadSecondPage();
    }

    function createMainContent() {
        const main = document.querySelector("main");
        const startButton = makeButton({ textContent: "Start Game", event: "click", callBackFunction: [startButtonClicked] });
        main.appendChild(startButton);
    }

    function makeFooter() {
        const body = document.querySelector("body");
        const footer = makeElement({elementType: "footer"});
        body.appendChild(footer); 
    }

    function createFooterContent() {
        const footer = document.querySelector("footer");
        const div = makeElement({textContent: "Created to complete the assignment BATTLESHIP of The Odin Project."});

        const linkToOdinProject = makeElement({elementType: "a"});
        linkToOdinProject.setAttribute("href", "https://www.theodinproject.com");
        const odinLogoImg = makeImg({ id: "odin", src: odinLogo, title: "The Odin Project Logo and Link"});
        linkToOdinProject.appendChild(odinLogoImg);
        
        const linkToSourceCode = makeElement({ elementType: "a"});
        linkToSourceCode.setAttribute("href", "https://github.com/4C-75-63-6B-79/Battleship");
        const gitHubLogo = makeImg({ id: "github", src: githubLogo, title: "Source Code Link"});
        linkToSourceCode.appendChild(gitHubLogo);

        div.appendChild(linkToOdinProject);
        div.appendChild(linkToSourceCode);
        footer.appendChild(div);
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