import { CellStatus } from "./utils/const";

export class Cell {
    x: number;
    y: number;
    status: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.status = CellStatus.free;
    }
}