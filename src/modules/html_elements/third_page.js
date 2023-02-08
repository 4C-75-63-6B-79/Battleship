import { makeElement, makeGrid } from "./html_create_functions";

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

    function makeEnemyWater() {
        const enemyWater = document.getElementById("enemyWater");
        const title = makeElement({elementType: "h2", textContent: "Enemy Waters", title: "Enemy Waters"});
        enemyWater.appendChild(title);

        const grid = makeGrid();
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