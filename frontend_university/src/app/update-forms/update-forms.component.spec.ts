import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormsComponent } from './update-forms.component';

describe('UpdateFormsComponent', () => {
  let component: UpdateFormsComponent;
  let fixture: ComponentFixture<UpdateFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
