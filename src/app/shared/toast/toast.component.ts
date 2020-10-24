import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input() message: string;

  xWin: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.message == "Крестики выиграли"){
      this.xWin = true;
    }
    else {
      this.xWin = false;
    }
  }

}
