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

        // setting the gird using javascript will remove later
        gridContainer.style.display = "grid";
        gridContainer.style.gridTemplateRows = "repeat(10, 30px)";
        gridContainer.style.gridTemplateColumns = "repeat(10, 30px)";
        gridContainer.style.gap = "5px";
        // remove things above here.

        main.appendChild(gridContainer);
    }

    function highlightBoxes(currentBoxCoordinates, currentAxis, iterationTimes) {
        const adder = currentAxis === "x" ? 1 : 10;
        for(let i=0; i<iterationTimes; i += 1) {
            const coordinates =  Number(currentBoxCoordinates) + adder * i < 10 ? `0${Number(currentBoxCoordinates) + adder * i}` : Number(currentBoxCoordinates) + adder * i;
            const box = document.querySelector(`[data-coordinates = "${coordinates}"]`);
            box.style.backgroundColor = "#aaaaaa";
        }
    }

    function removeHighlightBoxes(currentBoxCoordinates, currentAxis, iterationTimes) {
        const adder = currentAxis === "x" ? 1 : 10;
        for(let i=0; i<iterationTimes; i += 1) {
            const coordinates =  Number(currentBoxCoordinates) + adder * i < 10 ? `0${Number(currentBoxCoordinates) + adder * i}` : Number(currentBoxCoordinates) + adder * i;
            const box = document.querySelector(`[data-coordinates = "${coordinates}"]`);
            box.style.backgroundColor = "#ffffff";
        }
    }

    function mouseOverBox(event) {
        const box = event.target;
        const dataCoordinates = box.getAttribute("data-coordinates");
        const currentAxis = document.querySelector("button[data-currentAxis]").getAttribute("data-currentAxis");
        if(currentAxis === "x" && 10 - Number(dataCoordinates.charAt(1)) >= 5) {
            highlightBoxes(dataCoordinates, currentAxis, 5);
        } else if(currentAxis === "y" && 10 - Number(dataCoordinates.charAt(0)) >= 5) {
            highlightBoxes(dataCoordinates, currentAxis, 5);
        } else {
            box.style.backgroundColor = "#ffaaaa";
            box.style.cursor = "not-allowed";
        }
    }

    function mouseOutBox(event) {
        const box = event.target;
        const dataCoordinates = box.getAttribute("data-coordinates");
        const currentAxis = document.querySelector("button[data-currentAxis]").getAttribute("data-currentAxis");
        if(currentAxis === "x" && 10 - Number(dataCoordinates.charAt(1)) >= 5) {
            removeHighlightBoxes(dataCoordinates, currentAxis, 5);
        } else if(currentAxis === "y" && 10 - Number(dataCoordinates.charAt(0)) >= 5) {
            removeHighlightBoxes(dataCoordinates, currentAxis, 5);
        } else {
            box.style.backgroundColor = "#ffffff";
            box.style.cursor = "default";
        }
    }

    function makeGrid() {
        const gridContainer = document.querySelector("div.gridContainer");
        for(let i=0; i<10; i += 1) {
            for(let j=0; j<10; j += 1) {
                const div = makeDiv({classNames: "box", title: "emptyBox", dataAttributeName: "coordinates", dataAttributeValue: `${i}${j}`, events: ["mouseover", "mouseout"], callBackFunctions: [mouseOverBox, mouseOutBox] });
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