import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MockData } from '../../../../../app/shared/mock-data';
import {
  Language,
  LanguageLevel,
  LanguageName
} from '../../../../../app/shared/models/language.model';
import { dateValidator } from '../../../../../app/shared/directives/date-validator.directive';
import { User } from '../../../../../app/shared/models/user.model';

@Component({
  selector: 'app-profile-language',
  templateUrl: './profile-language.component.html',
  styleUrls: ['./profile-language.component.scss']
})
export class ProfileLanguageComponent implements OnInit, OnChanges {
  @Input() language: Language = {} as Language;
  @Input() user: User = {} as User;
  @Output() save: EventEmitter<User> = new EventEmitter();
  @Output() update: EventEmitter<User> = new EventEmitter();

  rForm: FormGroup;
  languageLevels: LanguageLevel[];
  languageNames: LanguageName[];
  submitted: boolean;

  constructor() {}
  ngOnInit() {
    this.loadSelectProperties();
    this.submitted = false;
  }
  ngOnChanges(changes: SimpleChanges) {
    let language = {} as Language;
    if (this.hasChangeLanguage(changes.language)) {
      language = changes.language.currentValue;
    }
    this.loadFormInstance(language);
  }
  private hasChangeLanguage(language) {
    return language && language.currentValue;
  }
  public loadSelectProperties(): void {
    this.languageLevels = MockData.LANGUAGES_LEVEL;
    this.languageNames = MockData.LANGUAGES_NAME;
  }

  public loadFormInstance(language: Language): void {
    this.rForm = new FormGroup({
      level: new FormControl(language.level, [Validators.required]),
      name: new FormControl(language.name, [Validators.required]),
      date: new FormControl(language.date, [
        Validators.required,
        dateValidator()
      ])
    });
  }

    getErrorMessageLevel() {
        return this.rForm.controls['level'].hasError('required') ? 'Debes introducir un nivel' : '';
    }

    getErrorMessageName() {
        return this.rForm.controls['name'].hasError('required') ? 'Debes introducir un nombre' : '';
    }

    getErrorMessageDate() {
        return this.rForm.controls['date'].hasError('required') ? 'Debes introducir una fecha' :
            this.rForm.controls['date'].hasError('dateValidator') ? 'Fecha incorrecta'
                : '';
    }



  public submit() {
    this.saveOrUpdate({ ...this.language, ...this.rForm.value });
    this.submitted = true;
  }

  compareLevel(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  compareName(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  private _update(language: Language) {
    const languages = this.user.languages.map(_language =>
      _language.uid === language.uid ? language : _language
    );
    const user = {
      ...this.user,
      languages
    };
    this.update.emit(user);
  }
  private _save(language: Language) {
    const _language = MockData.fakeIncreaseID<Language>(
      this.user.languages,
      language
    );
    const languages = [...this.user.languages, _language];
    const user = {
      ...this.user,
      languages
    };
    this.save.emit(user);
  }

  saveOrUpdate(language: Language) {
    this.isNew() ? this._save(language) : this._update(language);
  }
  public isNew(): boolean {
    return !!!this.language;
  }
}
