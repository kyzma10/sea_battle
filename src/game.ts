import { Ship } from "./ship";
export class Game {
    ships: Ship[] = [];
    getAllShip() {
        for(let i = 1; i < 5; i++) {
            this.ships.push(new Ship(1));
            if(i > 1){
                this.ships.push(new Ship(2));
            }
            if(i > 2) {
                this.ships.push(new Ship(3));
            }
            if(i > 3) {
                this.ships.push(new Ship(4));
            }
        }
    }
}