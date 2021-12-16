import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from "./students-list/students-list.component";
import { UpdateFormsComponent } from "./update-forms/update-forms.component";
import { StudentCreateFormComponent } from "./student-create-form/student-create-form.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "students"},
  {path: "students", component: StudentsListComponent},
  {path: "students/:id/info", component: UpdateFormsComponent},
  {path: "students/new", component: StudentCreateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
