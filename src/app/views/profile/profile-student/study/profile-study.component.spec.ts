import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { ProfileStudyModifyStudiesComponent } from './profile-study.component';

import { ProfileStudyComponent } from './profile-study.component';

describe('ProfileStudyModifyComponent', () => {
  let component: ProfileStudyComponent;
  let fixture: ComponentFixture<ProfileStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileStudyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
