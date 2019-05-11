import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../shared/services/profile.service';
import { MockData } from 'src/app/shared/mock-data';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import {
  User,
  DocumentType,
  Municipe,
  Province
} from 'src/app/shared/models/user.model';
import { documentNumberValidator } from 'src/app/shared/directives/document-number-validator.directive';
import { AppStore } from 'src/app/shared/states/store.interface';
import { Store } from '@ngrx/store';
import { getProfile } from 'src/app/shared/states/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-account',
  templateUrl: './profile-account.component.html',
  styleUrls: ['./profile-account.component.scss']
})
export class ProfileAccountComponent implements OnInit, OnChanges {
  @Input() user: User;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSave: EventEmitter<User> = new EventEmitter<User>();
  rForm: FormGroup;
  documentsType: DocumentType[];
  municipes: Municipe[];
  provinces: Province[];

  constructor() {}
  ngOnInit() {
    this.loadSelectProperties();
    this.loadFormInstance();
  }
  ngOnChanges() {
    this.loadFormInstance();
  }
  public loadSelectProperties(): void {
    this.documentsType = MockData.DOCUMENTS_TYPE;
    this.municipes = MockData.MUNICIPES;
    this.provinces = MockData.PROVINCES;
  }

  public loadFormInstance(): void {
    this.rForm = new FormGroup(
      {
        name: new FormControl(this.user.name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(55),
          Validators.pattern(/^[a-zA-Z]+$/)
        ]),
        surname: new FormControl(this.user.surname, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(55),
          Validators.pattern(/^[a-zA-Z]+$/)
        ]),
        phone: new FormControl(this.user.phone, [
          Validators.pattern(/^[0-9]{6,}$/),
          Validators.required
        ]),
        phone2: new FormControl(this.user.phone2, [
          Validators.pattern(/^[0-9]{6,}$/),
          Validators.required
        ]),

        birthdate: new FormControl(this.user.birthdate, [
          Validators.required,
          dateValidator()
        ]),
        documentType: new FormControl(this.user.documentType, [
          Validators.required
        ]),
        documentNumber: new FormControl(this.user.documentNumber, [
          Validators.required
        ]),
        street: new FormControl(this.user.address.street, [
          Validators.required
        ]),
        municipe: new FormControl(this.user.address.municipe, [
          Validators.required
        ]),
        province: new FormControl(this.user.address.province, [
          Validators.required
        ]),
        aboutMe: new FormControl(this.user.aboutMe),
        otherCompetences: new FormControl(this.user.aboutMe),
        license: new FormControl(this.user.license)
      },
      documentNumberValidator()
    );
  }

  public save() {
    const { street = '', municipe = '', province = '', ...rest } = {
      ...this.rForm.value
    };
    const address = {
      street,
      municipe,
      province
    };
    const user = { ...this.user, address, ...rest };
    this.onSave.emit(user);
  }
  compareByUID(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }

    getErrorMessageName() {
        return this.rForm.controls['name'].hasError('required') ? 'Debes introducir un valor' :
            this.rForm.controls['name'].hasError('minlength') ? 'Longitud mínima 3 caracteres' :
                this.rForm.controls['name'].hasError('maxlength') ? 'Longitud máxima 55 caracteres' :
                    this.rForm.controls['name'].hasError('pattern') ? 'Formato nombre erróneo' :
                '';
    }

    getErrorMessageSurname() {
        return this.rForm.controls['surname'].hasError('required') ? 'Debes introducir un valor' :
            this.rForm.controls['surname'].hasError('minlength') ? 'Longitud mínima 3 caracteres' :
                this.rForm.controls['surname'].hasError('maxlength') ? 'Longitud máxima 55 caracteres' :
                    this.rForm.controls['surname'].hasError('pattern') ? 'Formato apellido erróneo' :
                        '';
    }

    getErrorMessagePhone() {
        return this.rForm.controls['phone'].hasError('required') ? 'Debes introducir un valor' :
            this.rForm.controls['phone'].hasError('pattern') ? 'Formato teléfono erróneo' :
                '';
    }

    getErrorMessagePhone2() {
        return this.rForm.controls['phone2'].hasError('required') ? 'Debes introducir un valor' :
            this.rForm.controls['phone2'].hasError('pattern') ? 'Formato teléfono erróneo' :
                '';
    }

    getErrorMessageBirthdate() {
        return this.rForm.controls['birthdate'].hasError('required') ? 'Debes introducir un valor correcto' :
            this.rForm.controls['birthdate'].hasError('forbiddenDate') ? 'Formato fecha errónea' :
                '';
    }

    getErrorMessageDocumentType() {
        return this.rForm.controls['documentType'].hasError('required') ? 'Debes introducir un valor' :  '';
    }

    getErrorMessageDocumentNumber() {
        return this.rForm.controls['documentNumber'].hasError('required') ? 'Debes introducir un valor' :
            this.rForm.hasError('documentNumberForbbiden') ? 'Formato Número incorrecto' :
                '';
    }

    getErrorMessageStreet() {
        return this.rForm.controls['street'].hasError('required') ? 'Debes introducir un valor' :  '';
    }

    getErrorMessageMunicipe() {
        return this.rForm.controls['municipe'].hasError('required') ? 'Debes introducir un valor' :  '';
    }

    getErrorMessageProvince() {
        return this.rForm.controls['province'].hasError('required') ? 'Debes introducir un valor' :  '';
    }

}
