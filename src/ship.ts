import { TypeShip } from './utils/const';
import { Coord } from "./coord";

export class Ship {
    type: TypeShip;
    size: number;
    count: number;
    coord: Coord[];

    constructor(type: TypeShip = null) {
        this.type = type;
        switch(this.type) {
            case 1: {
                this.size = 1;
                this.count = 4;
                break;
            }

            case 2: {
                this.size = 2;
                this.count = 3;
                break;
            }

            case 3: {
                this.size = 3;
                this.count = 2;
                break;
            }

            case 4: {
                this.size = 4;
                this.count = 1;
                break;
            }

            default: {
                this.size = null;
                this.count = null;
            }
        }

    }
}