import { makeDiv } from "./html_create_functions";

const secondPage = (function secondPage() {

    function removeClassFromHeader() {
        const h1 = document.querySelector("h1.firstPage");
        h1.classList.remove("firstPage")
    }

    function removeAllContentMain() {
        const main = document.querySelector("main");
        main.replaceChildren();
    }

    function makeWhichShipToBePlacedHeader() {
        const main = document.querySelector("main");
        const h2 = document.createElement("h2");
        h2.setAttribute("title", "Chief, Place Your Carrier");
        h2.textContent = "Chief, Place your Carrier";
        main.appendChild(h2);
    }

    function axisButtonClicked(event) {
        const button = event.target;
        const currentAxis = button.getAttribute("data-currentAxis");
        if(currentAxis === "x") {
            button.textContent = "Place Vessel in X Axis";
            button.setAttribute("title", "Place Vessel in X Axis");
            button.setAttribute("data-currentAxis", "y");
        } else if (currentAxis === "y"){
            button.textContent = "Place Vessel in Y Axis";
            button.setAttribute("title", "Place Vessel in Y Axis");
            button.setAttribute("data-currentAxis", "x");
        }
    }

    function makeAxisChoiceButton() {
        const main = document.querySelector("main");
        const axisButton = document.createElement("button");
        axisButton.setAttribute("title", "Place Vessel in Y Axis");
        axisButton.setAttribute("data-currentAxis", "x");
        axisButton.textContent = "Place Vessel in Y Axis";
        axisButton.addEventListener("click", axisButtonClicked);
        main.appendChild(axisButton);
    }

    function makeGridContainer() {
        const main = document.querySelector("main");
        const gridContainer = document.createElement("div");
        gridContainer.setAttribute("class", "gridContainer");
        main.appendChild(gridContainer);
    }

    function makeGrid() {
        const gridContainer = document.querySelector("div.gridContainer");
        for(let i=0; i<10; i += 1) {
            for(let j=0; j<10; j += 1) {
                const div = makeDiv({classNames: "box", title: "emptyBox", dataAttributeName: "coordinates", dataAttributeValue: `${i}${j}`, event: "mouseover"});
                gridContainer.appendChild(div);
            }
        }

    }

    function loadSecondPage() {
        removeClassFromHeader();
        removeAllContentMain();
        makeWhichShipToBePlacedHeader();
        makeAxisChoiceButton();
        makeGridContainer();
        makeGrid();
    }

    return {
        loadSecondPage,
    }

})();

const {loadSecondPage} = secondPage;

export default loadSecondPage;