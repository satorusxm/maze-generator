// generator.ts


import Block from './block';
import Field from './field';


function shuffleArray(array: any[]): any[] {
    let curId = array.length;
    
    while (0 !== curId) {
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;

      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    
    return array;
}

function track(field: Field, block: Block, from: string): boolean {
    if (block.visited) return false;

    block.walls[from] = false;
    block.visited = true;
    
    const neighbors = field.getNeighbors(block);
    const order = shuffleArray([
        ['top', 'bottom'],
        ['right', 'left'],
        ['bottom', 'top'],
        ['left', 'right']
    ]);

    for (const data of order) {
        const b = neighbors[data[0]];
        if (b)
            if (track(field, b, data[1]))
                block.walls[data[0]] = false;
    }

    return true;
}

function generate(width: number, height: number) {
    const field: Field = new Field(width, height);
    const startPoint: [number, number] = [0, 0];
    const startBlock: Block = field.get(...startPoint);
    
    track(field, startBlock, 'left');

    return field;
}


export default generate;