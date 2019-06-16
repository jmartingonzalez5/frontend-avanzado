import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  VocationalStudy,
  Institution,
  Category,
  TitleStudy,
  Grade,
  CollegeStudy
} from '../../../../../../app/shared/models/study.model';
import { MockData } from '../../../../../../app/shared/mock-data';
import { dateValidator } from '../../../../../../app/shared/directives/date-validator.directive';

@Component({
  selector: 'app-vocational-form',
  templateUrl: './vocational-form.component.html'
})
export class VocationalFormComponent implements OnInit, OnChanges {
  @Output() onSave: EventEmitter<VocationalStudy> = new EventEmitter();
  @Input() study: VocationalStudy = {} as VocationalStudy;
  public institutions: Institution[];
  public categories: Category[];
  public titles: TitleStudy[];
  public grades: Grade[];
  public rForm: FormGroup;
  public submitted: boolean;

  constructor() {}
  ngOnInit() {
    this.loadSelectProperties();
    this.submitted = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    let study = {} as VocationalStudy;
    if (this.hasChangeStudy(changes.study)) {
      study = changes.study.currentValue;
    }
    this.loadFormInstance(study);
  }
  private hasChangeStudy(study) {
    return study && study.currentValue;
  }

  public loadSelectProperties(): void {
    this.institutions = MockData.VOCATIONAL_INSTITUTION;
    this.categories = MockData.VOCATIONAL_CATEGORY;
    this.titles = MockData.VOCATIONAL_TITLE;
    this.grades = MockData.VOCATIONAL_GRADES;
  }

  public loadFormInstance(study: VocationalStudy): void {
    this.rForm = new FormGroup({
      institution: new FormControl(study.institution, [Validators.required]),
      category: new FormControl(study.category, [Validators.required]),
      grade: new FormControl(study.grade, [Validators.required]),
      title: new FormControl(study.title, [Validators.required]),
      date: new FormControl(study.date, [Validators.required, dateValidator()]),
      dual: new FormControl(study.dual, []),
      bilingue: new FormControl(study.bilingue, [])
    });
  }

    getErrorMessageInstitution() {
        return this.rForm.controls['institution'].hasError('required') ? 'Debes introducir un Centro Educativo' : '';
    }

    getErrorMessageCategory() {
        return this.rForm.controls['category'].hasError('required') ? 'Debes introducir la Familia Profesional' : '';
    }

    getErrorMessageGrade() {
        return this.rForm.controls['grade'].hasError('required') ? 'Debes introducir el Nivel' : '';
    }

    getErrorMessageTitle() {
        return this.rForm.controls['title'].hasError('required') ? 'Debes introducir el Título' : '';
    }

    getErrorMessageDate() {
        return this.rForm.controls['date'].hasError('required') ? 'Debes introducir una Fecha' :
            this.rForm.controls['date'].hasError('dateValidator') ? 'Formato fecha errónea' :
                '';
    }

    public submit() {
      this.submitted = true;
      this.onSave.emit({ ...this.study, ...this.rForm.value });
  }

  public compareInstitution(
    institution1: Institution,
    institution2?: Institution
  ) {
    return institution1.uid === (institution2 && institution2.uid);
  }
  public compareCategory(category1: Category, category2: Category) {
    return category1.uid === (category2 && category2.uid);
  }
  public compareTitle(title1: TitleStudy, title2: TitleStudy) {
    return title1.uid === (title2 && title2.uid);
  }

  public compareGrade(grade1: Grade, grade2: Grade) {
    return grade1.uid === (grade2 && grade2.uid);
  }
  public save() {
    const study: VocationalStudy = {
      certificate: false,
      ...this.rForm.value
    };
    this.onSave.emit(study);
  }
}
