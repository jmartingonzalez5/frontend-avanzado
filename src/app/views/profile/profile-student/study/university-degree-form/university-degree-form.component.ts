import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CollegeStudy } from 'src/app/shared/models/study.model';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';

@Component({
  selector: 'app-university-degree-form',
  templateUrl: './university-degree-form.component.html'
})
export class UniversityDegreeComponent implements OnInit, OnChanges {
  @Output() onSave: EventEmitter<CollegeStudy> = new EventEmitter();
  @Input() study: CollegeStudy = {} as CollegeStudy;
  public rForm: FormGroup;

  constructor() {}
  ngOnInit() {
    this.loadSelectProperties();
  }
  ngOnChanges(changes: SimpleChanges) {
    let study = {} as CollegeStudy;
    if (this.hasChangeStudy(changes.study)) {
      study = changes.study.currentValue;
    }
    this.loadFormInstance(study);
  }
  private hasChangeStudy(study) {
    return study && study.currentValue;
  }

  public loadSelectProperties(): void {}

  public loadFormInstance(study: CollegeStudy): void {
    this.rForm = new FormGroup({
      institution: new FormControl(study.institution, [Validators.required]),
      title: new FormControl(study.title, [Validators.required]),
      date: new FormControl(study.date, [Validators.required, dateValidator()]),
      bilingue: new FormControl(study.bilingue, [])
    });
  }

    getErrorMessageInstitution() {
        return this.rForm.controls['institution'].hasError('required') ? 'Debes introducir un Centro Educativo' : '';
    }

    getErrorMessageTitle() {
        return this.rForm.controls['title'].hasError('required') ? 'Debes introducir un Título' : '';
    }

    getErrorMessageDate() {
        return this.rForm.controls['date'].hasError('required') ? 'Debes introducir una Fecha' :
            this.rForm.controls['date'].hasError('dateValidator') ? 'Formato fecha errónea' :
                '';
    }


  public submit() {
    this.onSave.emit({ ...this.study, ...this.rForm.value });
  }

  public save() {
    const study: CollegeStudy = {
      certificate: false,
      ...this.rForm.value
    };
    this.onSave.emit(study);
  }
}
