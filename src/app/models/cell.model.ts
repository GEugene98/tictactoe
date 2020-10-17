import { CellContent } from './cell-conent.enum';

export class Cell {
    
    constructor(i: number, j: number, content: CellContent = null) {
        this.i = i;
        this.j = j;
        this.content = content;
    }

    public content: CellContent =  null;

    public i = 0; 
    public j = 0; 

    setToX() {
        this.content = CellContent.X;
    }

    setToO() {
        this.content = CellContent.O;
    }
}
