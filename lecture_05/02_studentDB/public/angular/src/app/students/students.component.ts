import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';

export class Student {
  #id!:string; 
  #_name!: string;
  #_gpa!: number; 

  get id():string{
    return this.#id;
  }
  get name(): string{
    return this.#_name;
  }
  get gpa(): number{
    return this.#_gpa;
  }
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students!: Student[]
  constructor(private service : StudentDataService) {
    this.students = []
   }

  ngOnInit(): void {
    this.service.getStudents().subscribe(
      {
        next: students=> this.students = students, 
        error: (err) => console.log(err),
        complete: ()=> console.log("Done")
      }
    )
  }
}
