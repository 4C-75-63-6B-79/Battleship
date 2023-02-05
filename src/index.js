import "./style.css";

import Player from "./modules/object/player";
import placePlayerShips from "./modules/object/game_control";
import startFirstPage from "./modules/first_page";

console.log("battleship");

const test = new Player("test");
(placePlayerShips(test));
console.log(test.friendlyWater.board);
startFirstPage();
