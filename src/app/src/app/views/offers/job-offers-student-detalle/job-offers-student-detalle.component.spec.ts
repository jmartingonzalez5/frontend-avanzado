import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersStudentDetalleComponent } from './job-offers-student-detalle.component';

describe('JobOffersStudentDetalleComponent', () => {
  let component: JobOffersStudentDetalleComponent;
  let fixture: ComponentFixture<JobOffersStudentDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOffersStudentDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOffersStudentDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
