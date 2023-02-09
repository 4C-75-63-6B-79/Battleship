/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import odinLogo from "../../assets/images/odin_logo.svg";
import githubLogo from "../../assets/images/github_logo.svg";

import { makeElement, makeButton, makeImg, makeInput } from "./html_create_functions";
import loadSecondPage from "./second_page";
import { initPlayers } from "../object/game_control";

const firstPage = (function initFirstPage() {

    function bodyRemoveContent() {
        const body = document.querySelector("body");
        body.replaceChildren();
    }

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

    function inputNameValidation() {

        const inputName = document.querySelector("input");
        const inputNameError = document.querySelector("span.error");

        function showErrorName() {
            if(inputName.validity.valueMissing) {
                inputNameError.textContent = "You need to enter your name";
                inputNameError.className = "error active";
            } else if(inputName.validity.patternMismatch) {
                inputNameError.textContent = "name should start with capital letter";
                inputNameError.className = "error active";
            } else if(inputName.validity.tooShort) {
                inputNameError.textContent = "name should be atleast 2 characters long";
                inputNameError.clasName = "error active";
            }
        }

        if(inputName.validity.valid) {
            inputNameError.textContent = "";
            inputNameError.className = "error";
        } else {
            showErrorName();
        }
        if(inputName.getAttribute("placeholder")) {
            inputName.removeAttribute("placeholder");
        }
    }

    function makeForm() {
        const main = document.querySelector("main");
        const form = makeElement({elementType: "form"});
        const label = makeElement({elementType: "label", textContent: "Enter name", title: "enter name label"});
        label.setAttribute("for", "name");
        const input = makeInput({type: "text", id: "name", name: "name", pattern: "^[A-Z][A-Za-z]*", minLength: 2, maxLength: 15, placeholder: "Enter your name", required: true});
        input.addEventListener("input", inputNameValidation)
        const span = makeElement({elementType: "span", classNames: "error"});
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(span);
        main.appendChild(form);
    }

    function startButtonClicked() {
        const inputName = document.querySelector("input");
        if(!inputName.validity.valid) {
            inputNameValidation();
        } else {
            const playerName = inputName.value;
            initPlayers(playerName);
            loadSecondPage();
        }
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
        bodyRemoveContent();
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