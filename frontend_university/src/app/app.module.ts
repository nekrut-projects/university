import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { UpdateFormsComponent } from './update-forms/update-forms.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { StudentCreateFormComponent } from './student-create-form/student-create-form.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    StudentsListComponent,
    StudentCreateFormComponent,
    UpdateFormsComponent,
    AppFooterComponent,
    StudentCreateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
