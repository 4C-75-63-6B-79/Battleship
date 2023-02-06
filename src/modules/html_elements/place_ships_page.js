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

    function loadSecondPage() {
        removeClassFromHeader();
        removeAllContentMain();
        makeWhichShipToBePlacedHeader();
        makeAxisChoiceButton();
    }

    return {
        loadSecondPage,
    }

})();

const {loadSecondPage} = secondPage;

export default loadSecondPage;