/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { makeElement, makeGrid } from "./html_create_functions";
import { playerComputerMakesMove, playerUserMakesMove } from "../object/game_control";
import loadFourthPage from "./fourth_page";

const thirdPage = (function initThirdPage() {

    function removeAllContentMain() {
        const main = document.querySelector("main");
        main.replaceChildren();
    }

    function makeStatusBox() {
        const main = document.querySelector("main");
        const statusBox = makeElement({id:"statusBox"});
        const p = makeElement({elementType: "p", textContent: "Awaiting your order Chief!", title: "Awaiting your order Chief!"});
        const pbackward = makeElement({elementType: "p", classNames: "backward"});
        statusBox.appendChild(pbackward);
        statusBox.appendChild(p);
        main.appendChild(statusBox);
    }

    function makeShipIndicatorConatiner() {
        const shipIndicatorConatiner = makeElement({id: "shipIndicatorContainer"});

        const ships = ["carrier", "battleship", "curiser", "submarine", "destroyer"];

        ships.forEach( ship => {
            const shipIndicator  = makeElement({classNames: "shipStatusIndicator", title: `${ship} is active`, dataAttributeName: "shipName", dataAttributeValue: ship});
            const shipName = makeElement({elementType: "h4", textContent: ship})
            const indicatorLight = makeElement({classNames: "indicatorLight shipActive"});
            shipIndicator.appendChild(shipName);
            shipIndicator.appendChild(indicatorLight);
            shipIndicatorConatiner.appendChild(shipIndicator);
        });
        return makeShipIndicatorConatiner;
    }

    function makeWaterContainers() {
        const main = document.querySelector("main");
        const waterContainer = makeElement({id: "waterContainer"});
        
        const friendlyWater = makeElement({id: "friendlyWater", classNames: "water"});
        const enemyWater = makeElement({id: "enemyWater", classNames: "water"});

        waterContainer.appendChild(friendlyWater);
        waterContainer.appendChild(enemyWater);

        main.appendChild(waterContainer);
    }

    function makeFriendlyWater(friendlyWaterGird) {
        const friendlyWater = document.getElementById("friendlyWater");
        const title = makeElement({elementType: "h2", textContent: "Friendly Waters", title: "Friendly Waters"});
        friendlyWater.appendChild(title);
        friendlyWater.appendChild(friendlyWaterGird);
    }

    function mouseOver(event) {
        const box = event.target;
        box.classList.add("target");
    }

    function mouseOut(event) {
        const box = event.target;
        box.classList.remove("target");
    }

    function updateFriendlyWater({coord, isPlayerHit}) {
        const box = document.querySelector(`#friendlyWater>.gridContainer>div[data-coordinates = "${coord[0]}${coord[1]}"]`);
        box.classList.add(isPlayerHit ? "hit" : "miss");
    }

    function updateEnemyWater({coord, isPlayerHit}) {
        const box = document.querySelector(`#enemyWater>.gridContainer>div[data-coordinates = "${coord[0]}${coord[1]}"]`);
        box.classList.add(isPlayerHit ? "hit" : "miss");
    }

    function checkWinner({isWinner, name}) {
        if(isWinner) {
            console.log(name);
            loadFourthPage(name);
            return true;
        }
        return false;
    }

    function updateMessageBox({name, isPlayerHit, isNewShipSunk}) {

        function getMessage() {
            if(isNewShipSunk) {
                if(name === "computer") {
                   return `Enemy fired a shot and sunk your ${isNewShipSunk.name}.`;
                } 
                return `You fired a shot and sunk enemy's ${isNewShipSunk.name}.`;
            } 
            if(isPlayerHit){
                if(name === "computer") {
                    return "Enemy fired a shot and it hit your ship";
                } 
                return "You fired a shot and it hit enemy ship";
            }
            if(name === "computer") {
                return "Enemy fired a shot and missed";
            } 
            return "You fired a shot and missed";
        }

        const messageBox = document.getElementById("statusBox");
        const pbackward = document.querySelector("p.backward");
        messageBox.removeChild(pbackward);
        const p = document.querySelector("#statusBox > p");
        p.classList.add("backward");
        const textContent = getMessage();
        const newP = makeElement({elementType: "p", textContent, title: textContent});
        messageBox.appendChild(newP);
    }
    
    function mainGameControl(attackedCoordinates) {  // called when user makea a move with the coords
        let hitDetails = playerUserMakesMove(attackedCoordinates);
        updateEnemyWater(hitDetails);
        updateMessageBox(hitDetails);
        if(checkWinner(hitDetails)) return;
        hitDetails = playerComputerMakesMove();
        updateFriendlyWater(hitDetails);
        updateMessageBox(hitDetails);
        checkWinner(hitDetails);
    }

    function boxClicked(event) {
        const box = event.target;
        const coord = box.getAttribute("data-coordinates");
        box.style.backgroundColor = "#ffffff";
        box.removeEventListener("mouseover", mouseOver);
        box.removeEventListener("mouseout", mouseOut);
        box.removeEventListener("click", boxClicked);
        mainGameControl([Number(coord.charAt(0)), Number(coord.charAt(1))])
    }

    function makeEnemyWater() {
        const enemyWater = document.getElementById("enemyWater");
        const title = makeElement({elementType: "h2", textContent: "Enemy Waters", title: "Enemy Waters"});
        enemyWater.appendChild(title);

        const grid = makeGrid([mouseOver, mouseOut, boxClicked]);
        enemyWater.appendChild(grid);
    }

    function removeEventListenerFromGird(grid) {
        const boxes = Array.from(grid.children);
        boxes.forEach(box => {
            box.replaceWith(box.cloneNode(true));
        });
    }

    function loadThirdPage() {
        const friendlyWaterGrid = document.querySelector("div.gridContainer");
        removeEventListenerFromGird(friendlyWaterGrid);
        removeAllContentMain();
        makeStatusBox();
        makeWaterContainers();
        makeFriendlyWater(friendlyWaterGrid);
        makeEnemyWater();
    }

    return {
        loadThirdPage,
    }

})();

const { loadThirdPage } = thirdPage;

export default loadThirdPage;