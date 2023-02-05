const firstPage = (function() {

    function makeHeader() {
        const body = document.querySelector("body");
        const header = document.createElement("header");
        const h1 = document.createElement("h1");
        h1.textContent = "BATTLESHIP";
        h1.setAttribute("class", "firstPage");
        h1.setAttribute("title", "BATTLESHIP");
        header.appendChild(h1);
        body.appendChild(header);
    }

    function makeMain() {
        const body = document.querySelector("body");
        const main = document.createElement("main");
        body.appendChild(main);
    }

    function makeFooter() {
        const body = document.querySelector("body");
        const footer = document.createElement("footer");
        body.appendChild(footer); 
    }

    function startFirstPage() {
        makeHeader();
        makeMain();
        makeFooter();
    }

    return {
        startFirstPage,
    }

})();

const {startFirstPage} = firstPage;

export default startFirstPage;