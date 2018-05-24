import { Cell } from "./cell";
import { SIZE } from './utils/const';

export class Field {
    place: Array<Array<Cell>>;
    constructor() {
        const place: Array<Array<Cell>> = [];
        for(let i = 0; i < SIZE; i++) {
            place[i] = [];
            for(let j = 0; j < SIZE; j++){
                place[i][j] = new Cell(i, j);
            }
        }

        this.place = place;
    }
}