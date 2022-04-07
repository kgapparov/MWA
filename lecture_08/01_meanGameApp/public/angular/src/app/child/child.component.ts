import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  x : number = 0;
  @Input()
  y : number = 0;

  z : number =0; 

  @Output()
  addEvent : EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  add():void {
    this.z = this.x + this.y;
    this.addEvent.emit(this.z);
  }
}
