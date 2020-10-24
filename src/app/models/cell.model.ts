import { CellContent } from './cell-conent.enum';

export class Cell {
    
    constructor(i: number, j: number, content: CellContent = null) {
        this.content = content;
        this.i = i;
        this.j = j;
    }

    public i: number;
    public j: number;
    

    public content: CellContent =  null;


    setToX() {
        this.content = CellContent.X;
    }

    setToO() {
        this.content = CellContent.O;
    }
}
