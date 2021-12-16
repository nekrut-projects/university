import { Injectable } from '@angular/core';
import {Student} from "./student";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http: HttpClient) { }

  public findAll(){
    return this.http.get<Student[]>("/university/students");
  }

  public findByID(id: number){
    return this.http.get<Student>(`/university/students/${id}/info`);
  }

  public delete(id: number){
    return this.http.delete(`/university/students/${id}`);
  }

  public updateName(id: number, name: string){
    return this.http.put(`/university/students/name/${id}`, name);
  }

  public updateAge(id: number, age: number){
    return this.http.put(`/university/students/age/${id}`, age);
  }

  public save(student: Student){
      return this.http.post(`/university/students`, student);
  }
}
