/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import odinLogo from "../../assets/images/odin_logo.svg";
import githubLogo from "../../assets/images/github_logo.svg";

import { makeElement, makeButton, makeImg, makeInput } from "./html_create_functions";
import loadSecondPage from "./second_page";
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

    function makeForm() {
        const main = document.querySelector("main");
        const form = makeElement({elementType: "form"});
        const label = makeElement({elementType: "label", textContent: "Enter name", title: "enter name label"});
        label.setAttribute("for", "name");
        const input = makeInput({type: "text", id: "name", name: "name", pattern: "^[A-Za-z][A-Za-z]*", minLength: 1, maxLength: 15, placeholder: "", required: true})
        const span = makeElement({elementType: "span", classNames: "error"});
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(span);
        main.appendChild(form);
    }

    function startButtonClicked() {
        initPlayers();
        loadSecondPage();
    }

    function createStartGameButton() {
        const main = document.querySelector("main");
        const startButton = makeButton({ textContent: "Start Game", event: "click", title: "start game button", callBackFunction: [startButtonClicked] });
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

    function loadFirstPage() {
        makeHeader();
        makeHeaderContent();
        makeMain();
        makeForm();
        createStartGameButton();
        makeFooter();
        createFooterContent();
    }

    return {
        loadFirstPage,
    }

})();

const {loadFirstPage} = firstPage;

export default loadFirstPage;