import { Component, OnInit } from '@angular/core';
import { CellContent } from '../models/cell-conent.enum';
import { Cell } from '../models/cell.model';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  crossStroke: boolean = true;

  matrix: Cell[][] = [
    [new Cell(0,0), new Cell(0,1), new Cell(0,2)],
    [new Cell(1,0), new Cell(1,1), new Cell(1,2)],
    [new Cell(2,0), new Cell(2,1), new Cell(2,2)]
  ];

  constructor() { }

  ngOnInit(): void {
  }

  switchMode() {
    this.crossStroke = !this.crossStroke;
  }

  cellClicked(cell: Cell){
    if (this.crossStroke) {
      cell.setToX();
    } 
    else {
      cell.setToO();
    }  
  }

}
