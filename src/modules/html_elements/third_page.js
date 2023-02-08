import { makeElement, makeGrid } from "./html_create_functions";

import redDot from "../../assets/images/red_dot.svg";
import whiteDot from "../../assets/images/white_dot.svg";

const thirdPage = (function initThirdPage() {

    function removeAllContentMain() {
        const main = document.querySelector("main");
        main.replaceChildren();
    }

    function makeStatusBox() {
        const main = document.querySelector("main");
        const statusBox = makeElement({id:"statusBox", textContent: "Awaiting Order Chief", title: "Awaiting Order Chief"});
        main.appendChild(statusBox);
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
        box.style.backgroundColor = "#cccccc";
        box.style.cursor = "crosshair";
    }

    function mouseOut(event) {
        const box = event.target;
        box.style.backgroundColor = "#ffffff";
        box.style.cursor = "default";
    }

    function updateFriendlyWater(hitDetails) {
        const {coord, isPlayerHit} = hitDetails;
        const box = document.querySelector(`#friendlyWater>div[data-coordinates = "${coord[0]}${coord[1]}"]`);
        box.style.backgroundImage = isPlayerHit ? `url(${redDot})` : `url(${whiteDot})`;
    }

    function updateEnemyWater(hitDetails) {
        const {coord, isPlayerHit} = hitDetails;
        const box = document.querySelector(`#enemyWater>div[data-coordinates = "${coord[0]}${coord[1]}"]`);
        box.style.backgroundImage = isPlayerHit ? `url(${redDot})` : `url(${whiteDot})`;
    }

    function boxClicked(event) {
        const box = event.target;
        box.style.backgroundColor = "#ccaaaa";
        box.removeEventListener("mouseover", mouseOver);
        box.removeEventListener("mouseout", mouseOut);
        box.removeEventListener("click", boxClicked);
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
        updateEnemyWater,
        updateFriendlyWater
    }

})();

const { loadThirdPage, updateEnemyWater, updateFriendlyWater } = thirdPage;

export { loadThirdPage, updateEnemyWater, updateFriendlyWater };