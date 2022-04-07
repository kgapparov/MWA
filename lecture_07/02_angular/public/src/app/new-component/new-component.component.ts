import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  people:string[] = ["Jack", "John", "Jane", "James"];

  students = [{name: "Jack", course : "MWA", gpa: 3.0}, 
              {name: "Jill", course : "MPP", gpa: 3.0},
              {name: "John", course : "MPP", gpa: 3.0}]
  title:string = "this is a title";
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.title = "New title";
  }

  price: number = 123.445;
}
