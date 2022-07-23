// field.ts


import Block from './block';


class Field {
    width: number;
    height: number;
    map: Object;

    constructor (width: number, height: number) {
        this.width = width;
        this.height = height;
        this.map = new Object;

        for (let i = 0; i < width; ++i) {
            this.map[i] = new Object;
            for (let j = 0; j < height; ++j) {
                this.map[i][j] = new Block(i, j);
            }
        }
    }

    get(x: number, y: number): Block {
        return 0 <= x && x < this.width && 0 <= y && y < this.height ? this.map[x][y] : null;
    }

    getNeighbors(b: Block): {top: any, right: any, bottom: any, left: any} {
        const neighbors: {
            top: any,
            right: any,
            bottom: any,
            left: any
        } = {
            top: null,
            right: null,
            bottom: null,
            left: null
        };

        if (b.hasOwnProperty('x') && b.hasOwnProperty('y')) {
            const possibleNeighborCoordinates: Object = {
                top: [b.x, b.y - 1],
                right: [b.x + 1, b.y],
                bottom: [b.x, b.y + 1],
                left: [b.x - 1, b.y]
            };

            for (const ind of ['top', 'right', 'bottom', 'left']) {
                const coords: [number, number] = possibleNeighborCoordinates[ind];
                const n: Block = this.get(...coords);
                neighbors[ind] = n;
            }
        }

        return neighbors;
    }
}


export default Field;