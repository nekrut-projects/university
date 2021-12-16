import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {Student} from "../service/student";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.less']
})
export class StudentsListComponent implements OnInit {

  students: Student[] = [];

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.retrieveAllStudents();
  }

  private retrieveAllStudents(){
    this.studentService.findAll().subscribe(students => {
      console.log("Retrieve all students from server");
      this.students = students;
    }, error => {
      console.log('Error ${error}');
    });
  }

  delete(id: number){
    this.studentService.delete(id);
}
