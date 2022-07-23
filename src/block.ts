// block.ts


class Block {
    x: number;
    y: number;
    walls: {
        top: boolean,
        right: boolean,
        bottom: boolean,
        left: boolean
    };
    visited: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

        this.walls = {
            top: true,
            right: true,
            bottom: true,
            left: true
        };

        this.visited = false;
    }
}


export default Block;