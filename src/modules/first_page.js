import odinLogo from "../assets/images/odin_logo.svg";

const firstPage = (function initFirstPage() {

    function makeHeader() {
        const body = document.querySelector("body");
        const header = document.createElement("header");
        body.appendChild(header);
    }

    function makeHeaderContent() {
        const header = document.querySelector("header");
        const h1 = document.createElement("h1");
        h1.textContent = "BATTLESHIP";
        h1.setAttribute("class", "firstPage");
        h1.setAttribute("title", "BATTLESHIP");
        header.appendChild(h1);
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

    function createFooterContent() {
        const footer = document.querySelector("footer");
        const para = document.createElement("p");
        para.textContent = "Created to complete the assignment of The Odin Project.";

        // const linkToOdinProject = document.createElement("a");  // create a link to the odin project website
        // linkToOdinProject.setAttribute("herf", "https://www.theodinproject.com/");
        // const odinLogoImg = new Image();  // creating the logo of the odin project
        // odinLogoImg.setAttribute("title", "The Odin Project Logo");
        // odinLogoImg.src = odinLogo;

        // linkToOdinProject.appendChild(odinLogoImg);
        // para.appendChild(linkToOdinProject);
        footer.appendChild(para);
    }

    function startFirstPage() {
        makeHeader();
        makeHeaderContent();
        makeMain();
        makeFooter();
        createFooterContent();
    }

    return {
        startFirstPage,
    }

})();

const {startFirstPage} = firstPage;

export default startFirstPage;