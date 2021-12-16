import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {Student} from "../service/student";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-forms',
  templateUrl: './update-forms.component.html',
  styleUrls: ['./update-forms.component.less']
})
export class UpdateFormsComponent implements OnInit {

  public student = new Student("", -1);

  constructor(public studentService: StudentService,
              public route: ActivatedRoute,
              public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param.id == "new") {
        this.student = new Student("", -1);
      }
      this.studentService.findById(param.id)
        .subscribe(student => {
          this.student = student;
        }, error => {
          console.log(`Error ${error}`);
        });
    });
  }

  updateName() {
    this.studentService.updateName(ngModule.student.id, ngModule.student.name);
  }

  updateAge() {
    this.studentService.updateAge(ngModule.student.id, ngModule.student.age);
  }
}
