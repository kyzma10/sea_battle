import './style.css';

import{ SIZE } from "./utils/const";
import { Field } from './field';
import { Ship } from "./ship";
import { Game } from "./game";


let place = new Field();
console.log(place);
let ship = new Ship(4);
console.log(ship);
ship.coord = [{x:2,y:3},{x:2,y:4},{x:2,y:5},{x:2,y:6}];
console.log(ship.coord);

let game = new Game();
const allShips = game.getAllShip();

console.log(game.ships);

for(let i = 0; i < game.ships.length; i++){
    let newShip = document.createElement('div');
    newShip.id = `ship${i}`;
    newShip.draggable = true;
    document.getElementById('ships').appendChild(newShip);
    for(let j = 0; j < game.ships[i].size; j++) {
        let section = document.createElement('span');
        section.className = 'section-ship';
        document.getElementById(`ship${i}`).appendChild(section);
    }
}

const userPlace = document.getElementById('user_place');

for(let i = 0; i < SIZE; i++){
    for(let j = 0; j < SIZE; j++){
        let cellPlace = document.createElement('div');
        cellPlace.className = 'cell';
        userPlace.appendChild(cellPlace);
    }
}

