import { SIZE }from './const';

function createPlace(el: HTMLElement, place: HTMLElement) {
    for(let i = 0; i < SIZE; i++) {
        for(let j = 0; j < SIZE; j++) {
            place.appendChild(el);
        }
    }
}

function compareSize(one: any, two: any): number {
    return one.size - two.size;
}

export {
    createPlace,
    compareSize
}