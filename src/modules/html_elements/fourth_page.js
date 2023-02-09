/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { makeButton, makeElement } from "./html_create_functions";
import loadFirstPage from "./first_page";

const fourthPage = (function initFourthPage() {

    function removeMainContent() {
        const main = document.querySelector("main");
        main.replaceChildren();
    }

    function makeTheWinnerIs(winnerName) {
        const main = document.querySelector("main");
        const h2 = makeElement({elementType: "h2", classNames: "banner", textContent: "The Winner Is: ", title: "The Winner Is: "});
        const h3 = makeElement({elementType: "h2", classNames: "winner", textContent: winnerName, title: `winner name is ${winnerName}`});
        main.appendChild(h2);
        main.appendChild(h3);
    }

    function playAgainButtonClicked() {
        console.log("load first page");
        loadFirstPage();
    }

    function makeStartGameAgainButton() {
        const main = document.querySelector("main");
        const startGameAgainButton = makeButton({textContent: "Play Again", title: "play again button", event: "click", callBackFunction: [playAgainButtonClicked]});
        main.appendChild(startGameAgainButton);
    }

    function loadFourthPage(winnerName) {
        removeMainContent();
        makeTheWinnerIs(winnerName);
        makeStartGameAgainButton();
    }

    return {
        loadFourthPage,
    }
})();

const {loadFourthPage} = fourthPage;
export default loadFourthPage;