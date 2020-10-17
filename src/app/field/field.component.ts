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

  checkWin() {
    // Горизонталь
    for (let i = 0; i < this.matrix.length; i++) {
      let xCount = 0;
      let oCount = 0;
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (this.matrix[i][j].content == CellContent.X) {
          xCount++;
        }
        else if (this.matrix[i][j].content == CellContent.O) {
          oCount++;
        }
      }
      this.printResult(xCount, oCount);
    }

    
    // Вертикаль
    let i = 0;
    for (let j = 0; j < this.matrix.length; j++) {
      let xCount = 0;
      let oCount = 0;
      if (this.matrix[i][j].content == CellContent.X) {
        xCount = 1;
      }
      else if (this.matrix[i][j].content == CellContent.O) {
        oCount = 1;
      }
      for (let x = 1; x < this.matrix.length; x++) {
        if (this.matrix[x][j].content == CellContent.X) {
          xCount++;
        }
        else if (this.matrix[x][j].content == CellContent.O) {
          oCount++;
        }
      }
      this.printResult(xCount, oCount);
    }


    // Главная диагональ
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        if (i == j) {
          if (this.matrix[i][j].content == CellContent.X) {
            xCount++;
          }
          else if (this.matrix[i][j].content == CellContent.O) {
            oCount++;
          }
        }
      }
      this.printResult(xCount, oCount);  
    }


    // Побочная диагональ
    xCount = 0;
    oCount = 0;
    let n = this.matrix.length - 1;

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        if (i+j == n) {
          if (this.matrix[i][j].content == CellContent.X) {
            xCount++;
          }
          else if (this.matrix[i][j].content == CellContent.O) {
            oCount++;
          }
        }  
      }
    }
    this.printResult(xCount, oCount);
  }

  printResult(xCount, oCount) {
    if (xCount == 3) {
      alert("X win")
    }
    else if (oCount == 3) {
      alert("0 win")
    }
  }

  cellClicked(cell: Cell){
    if (this.crossStroke) {
      cell.setToX();
    } 
    else {
      cell.setToO();
    }  

    this.checkWin();
  }

}
