/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { placeUserShips, placeComputerShips } from "../object/game_control";
import { makeButton, makeElement, makeGrid} from "./html_create_functions";
import loadThirdPage  from "./third_page";

const secondPage = (function initSecondPage() {

    const currentShip = (function initShip() {
        const ships = [];
        let name; let len;
        function updateShip() {
            const ship = ships.pop();
            if(!ship) return true; // to show that all the ships are placed and now we can start the game
            name = ship.name;
            len = ship.len;
            return false;
        }
        function initShipsArray() {
            if(ships.length === 0) ships.push(
                {name: "destroyer", len: 2},
                {name: "cruiser", len: 3},
                {name: "submarine", len: 3},
                {name: "battleship", len: 4},
                {name: "carrier", len: 5}
            );
        }
        function getName() { return name; }
        function geLength() { return len; }
        return {
            initShipsArray,
            updateShip,
            getName,
            geLength,
        }
    })();

    function removeClassFromHeader() {
        const h1 = document.querySelector("h1.firstPage");
        h1.classList.remove("firstPage")
    }

    function removeAllContentMain() {
        const main = document.querySelector("main");
        main.replaceChildren();
    }

    function makeShipToBePlacedHeader() {
        const main = document.querySelector("main");
        const textContent = `Chief, Place Your ${  currentShip.getName().charAt(0).toUpperCase()  }${ currentShip.getName().substr(1) }`;
        const h2 = makeElement({ elementType: "h2", title: textContent, textContent});
        main.appendChild(h2);
    }

    function updateShipToBePlaceHeader() {
        const h2 = document.querySelector("h2");
        const textContent = `Chief, Place Your ${  currentShip.getName().charAt(0).toUpperCase()  }${ currentShip.getName().substr(1) }`;
        h2.setAttribute("title", textContent);
        h2.textContent = textContent;
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
        const axisButton = makeButton({ textContent: "Place Vessel in Y Axis", title: "Place Vessel in Y Axis", dataAttributeName: "currentAxis", dataAttributeValue: "x", event: "click", callBackFunction: [axisButtonClicked] });
        main.appendChild(axisButton);
    }

    function getCoordinates(currentBoxCoordinates) {
        const currentCoordinate = [ Number(currentBoxCoordinates.charAt(0)), Number(currentBoxCoordinates.charAt(1)) ]
        const coordinates = [ currentCoordinate ];
        const currentAxis = document.querySelector("button[data-currentAxis]").getAttribute("data-currentAxis");
        const shipLength = currentShip.geLength();
        for(let i=0; i<shipLength; i += 1) {
            if(currentAxis === "x") {
                coordinates.push( [ currentCoordinate[0], currentCoordinate[1] + i ] );
            } else if(currentAxis === "y") {
                coordinates.push( [ currentCoordinate[0] + i, currentCoordinate[1] ] )
            }
        } 
        return coordinates;
    }

    function changeBoxesClass(className, currentBoxCoordinates) {
        const coordinates = getCoordinates(currentBoxCoordinates);
        coordinates.forEach(coords => {
            const dataCoordinates = `${coords[0]}${coords[1]}`;
            const box = document.querySelector(`[data-coordinates = "${dataCoordinates}"]`);
            box.className = `box ${className}`;
        });
    }

    function isCurrentBoxValidForShip(target) {
        const targetDataCoordinates = target.getAttribute("data-coordinates");
        const currentAxis = document.querySelector("button[data-currentAxis]").getAttribute("data-currentAxis");
        const shipLength = currentShip.geLength();
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

    function addCurrentShipImage(clickedBox) {
        const currentBox = clickedBox;
        const currentAxis = document.querySelector("button[data-currentAxis]").getAttribute("data-currentAxis");
        clickedBox.classList.add(`${currentShip.getName()}`);
        if(currentAxis === "y") {
            currentBox.style.transform = "rotateZ(90deg)";
        }
    }

    function mouseOverBox(event) {
        const box = event.target;
        const currentBoxCoordinates = box.getAttribute("data-coordinates");
        if(isCurrentBoxValidForShip(box)) {
            changeBoxesClass("validBox", currentBoxCoordinates);
        } else {
            box.classList.add("invalidBox");
        }
    }

    function mouseOutBox(event) {
        const box = event.target;
        const currentBoxCoordinates = box.getAttribute("data-coordinates");
        if(isCurrentBoxValidForShip(box)) {
            changeBoxesClass("", currentBoxCoordinates);
        } else {
            box.classList.remove("invalidBox");
        }
    }

    function boxClicked(event) {
        const clickedBox = event.target;
        const currentBoxCoordinates = clickedBox.getAttribute("data-coordinates");

        function removeEventListenerFormBoxes(coordinates) {
            coordinates.forEach( coords => {
                const dataCoordinates = `${coords[0]}${coords[1]}`;
                const box = document.querySelector(`[data-coordinates = "${dataCoordinates}"]`);
                box.setAttribute("data-ship", "");
                box.removeEventListener("mouseover", mouseOverBox);
                box.removeEventListener("mouseout", mouseOutBox);
                box.removeEventListener("click", boxClicked);
            });
        }

        function changeTitleBoxes(coordinates) {
            coordinates.forEach( coords => {
                const dataCoordinates = `${coords[0]}${coords[1]}`;
                const box = document.querySelector(`[data-coordinates = "${dataCoordinates}"]`);
                box.setAttribute("title", currentShip.getName());
            });
        }

        if(isCurrentBoxValidForShip(clickedBox)) {
            changeBoxesClass("shipPlacedOnBox", currentBoxCoordinates);
            addCurrentShipImage(clickedBox);
            const coordinates = getCoordinates(currentBoxCoordinates);
            removeEventListenerFormBoxes(coordinates);
            changeTitleBoxes(coordinates);
            placeUserShips(currentShip.getName(), coordinates);
            if (currentShip.updateShip()) {
                loadThirdPage();
            } else{
                updateShipToBePlaceHeader();
            }
        }
    }

    function makeGridContainer() {  // making gird to place the ships
        const main = document.querySelector("main");
        const grid = makeGrid([mouseOverBox, mouseOutBox, boxClicked]);
        main.appendChild(grid);
    }

    function loadSecondPage() {
        removeClassFromHeader();
        removeAllContentMain();
        currentShip.initShipsArray();
        currentShip.updateShip();
        makeShipToBePlacedHeader();
        makeAxisChoiceButton();
        makeGridContainer();
        makeGrid();
        placeComputerShips();
    }

    return {
        loadSecondPage,
    }

})();

const {loadSecondPage} = secondPage;

export default loadSecondPage;