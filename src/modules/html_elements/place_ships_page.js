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
        const h2 = document.querySelector("h2");
        h2.setAttribute("title", "Chief, Place Your Carrier");
        h2.textContent = "Chief, Place your Carrier";
        main.appendChild(h2);
    }

    function loadSecondPage() {
        removeClassFromHeader();
        removeAllContentMain();
    }

    return {
        loadSecondPage,
    }

})();

const {loadSecondPage} = secondPage;

export default loadSecondPage;