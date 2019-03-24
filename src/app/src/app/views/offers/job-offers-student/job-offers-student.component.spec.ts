import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersStudentComponent } from './job-offers-student.component';

describe('JobOffersStudentComponent', () => {
  let component: JobOffersStudentComponent;
  let fixture: ComponentFixture<JobOffersStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOffersStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOffersStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
