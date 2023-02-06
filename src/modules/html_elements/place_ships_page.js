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

    function getCoordinates(currentBoxCoordinates) {
        const currentCoordinate = [ Number(currentBoxCoordinates.charAt(0)), Number(currentBoxCoordinates.charAt(1)) ]
        const coordinates = [ currentCoordinate ];
        const currentAxis = document.querySelector("button[data-currentAxis]").getAttribute("data-currentAxis");
        const shipLength = 5;
        for(let i=0; i<shipLength; i += 1) {
            if(currentAxis === "x") {
                coordinates.push( [ currentCoordinate[0], currentCoordinate[1] + i ] );
            } else if(currentAxis === "y") {
                coordinates.push( [ currentCoordinate[0] + i, currentCoordinate[1] ] )
            }
        } 
        return coordinates;
    }

    function changeBoxesBackground(color, currentBoxCoordinates) {
        const coordinates = getCoordinates(currentBoxCoordinates);
        coordinates.forEach(coords => {
            const dataCoordinates = `${coords[0]}${coords[1]}`;
            const box = document.querySelector(`[data-coordinates = "${dataCoordinates}"]`);
            box.style.backgroundColor = color;
        });
    }

    function isCurrentBoxValidForShip(target) {
        const targetDataCoordinates = target.getAttribute("data-coordinates");
        const currentAxis = document.querySelector("button[data-currentAxis]").getAttribute("data-currentAxis");
        const shipLength = 5;
        const isEnoughNumberOfBoxes = (currentAxis === "x" && 10 - Number(targetDataCoordinates.charAt(1)) >= shipLength) || (currentAxis === "y" && 10 - Number(targetDataCoordinates.charAt(0)) >= shipLength) ;
        if(!isEnoughNumberOfBoxes) {
            return false;
        }
        const coordinates = getCoordinates(targetDataCoordinates);       
        const boxesHaveShipPlaced = coordinates.every( coords => {
            const dataCoordinates = `${coords[0]}${coords[1]}`;
            const box = document.querySelector(`[data-coordinates = "${dataCoordinates}"]`);
            if(box.getAttribute("data-ship") === "") {
                return false;
            }
            return true;
        });
        return boxesHaveShipPlaced;
    }

    function mouseOverBox(event) {
        const box = event.target;
        const currentBoxCoordinates = box.getAttribute("data-coordinates");
        if(isCurrentBoxValidForShip(box)) {
            changeBoxesBackground("#aaaaaa", currentBoxCoordinates);
        } else {
            box.style.backgroundColor = "#ffaaaa";
            box.style.cursor = "not-allowed";
        }
    }

    function mouseOutBox(event) {
        const box = event.target;
        const currentBoxCoordinates = box.getAttribute("data-coordinates");
        if(isCurrentBoxValidForShip(box)) {
            changeBoxesBackground("#ffffff", currentBoxCoordinates);
        } else {
            box.style.backgroundColor = "#ffffff";
            box.style.cursor = "default";
        }
    }

    function boxClicked(event) {
        const clickedBox = event.target;
        const currentBoxCoordinates = clickedBox.getAttribute("data-coordinates");
        if(isCurrentBoxValidForShip(clickedBox)) {
            changeBoxesBackground("#aaeeaa", currentBoxCoordinates);
            const coordinates = getCoordinates(currentBoxCoordinates);
            coordinates.forEach( coords => {
                const dataCoordinates = `${coords[0]}${coords[1]}`;
                const box = document.querySelector(`[data-coordinates = "${dataCoordinates}"]`);
                box.setAttribute("data-ship", "");
                box.removeEventListener("mouseover", mouseOverBox);
                box.removeEventListener("mouseout", mouseOutBox);
                box.removeEventListener("click", boxClicked);
            });
        }
    }

    function makeGrid() {
        const gridContainer = document.querySelector("div.gridContainer");
        for(let i=0; i<10; i += 1) {
            for(let j=0; j<10; j += 1) {
                const div = makeDiv({classNames: "box", title: "emptyBox", dataAttributeName: "coordinates", dataAttributeValue: `${i}${j}`, events: ["mouseover", "mouseout", "click"], callBackFunctions: [mouseOverBox, mouseOutBox, boxClicked] });
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