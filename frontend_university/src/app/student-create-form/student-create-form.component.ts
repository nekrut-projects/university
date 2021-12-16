import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {Student} from "../service/student";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-create-form',
  templateUrl: './student-create-form.component.html',
  styleUrls: ['./student-create-form.component.less']
})
export class StudentCreateFormComponent implements OnInit {

  public student = new Student("", -1);

  constructor(public studentService: StudentService,
                public route: ActivatedRoute,
                public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
          if (param.id == "new") {
            this.student = new Student("", -1);
          }
  }

  save() {
    this.studentService.save(ngModel.student);
    this.router.navigateByUrl('/students');
  }
}
