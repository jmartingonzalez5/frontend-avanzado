import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersCompanyComponent } from './job-offers-company.component';

describe('JobOffersCompanyComponent', () => {
  let component: JobOffersCompanyComponent;
  let fixture: ComponentFixture<JobOffersCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOffersCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOffersCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
