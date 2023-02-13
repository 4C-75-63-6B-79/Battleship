# Battleship

**[Link To The  Game](https://4c-75-63-6b-79.github.io/Battleship/)**

## Description
This is my solution of the **[BattleShip](https://www.theodinproject.com/lessons/node-path-javascript-battleship)** assignment in [The Odin Project](https://www.theodinproject.com/). The main aim of the assignment was to learn how to use the tests in the programs. We were asked to make the players, ships object and test them using jest. Additionally were asked to make the computer smart so that it makes move similar to humans.

## How To Play the game?
- When you open the game on the first page you will be asked to enter your Name(required).
- After you enter your name press `Start Game` button.
- On the second page you will be provided with a 10 X 10 grid where you can place your ships.
- To place ships you can move your cursor on the board and when the trail of cursor is green you can place the ship by clicking on the box. 
- Below the heading **Battleship** you can see the name of the ship which is currently being placed.
- Once the ships are placed on the boxes you cannot interact with the boxes anymore.
- If the box is greeen with **not - allowed** cursor you cannot place ship on those boxes.
- To change the **axis of ship placement** you can press the `Place vessel in Y Axis` button. The cursor trail will now show in vertical direction.
- After the last ship which is "destroyer" is placed the third page will automatically load.
- Below the heading of the "BattleShip" there is message box which indicates the status of what is happening in the game.
- On the third page we have 2 waters "Enemy" and "Friendly".
- Below the name of the water we have indicator lights which indicate the status of the ship **Green for Active** and **Red for Lost**.
- For friendly water the indicator light also blinks. **Blinking for ship hit**.
- Friendly Water is the board where you placed your ships and the computer can make attacks.
- Enemy water is the board of the enemy and you can interact with it to make attack on the enemy water.
- If the attack you made was successful then "red" dot will be placed there else "white" dot will be placed for missed attacks.
- When you sink a enemy ship then the light below that ship will turn red.
- Similarly computer makes attack on your friendly water. If the attack that computer makes is successful then the red dot is placed on friendly water else a white dot is placed on the friendly water.
- If all the ships of the single player are sunk then fourth page loads.
- On the fourth page then name of the winner is given.
- To play the game again you can press `Play again` button.

## How computer plays the game?
If computer makes a successful attack then it makes other attacks adjacent to the this successful attack. If the attack was not successful then computer places its attack randomly on the positions that have not been attacked.
If the board is 45% filled then computer makes attack on the continuous empty boxes with the length of the longest user ship left.