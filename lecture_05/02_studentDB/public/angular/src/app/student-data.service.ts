import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from './students/students.component';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    console.log(environment.BASE_API_URL);
    return this.http.get<Student[]>(environment.BASE_API_URL);
  }
}
