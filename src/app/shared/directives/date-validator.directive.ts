import { ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import {AppSettings} from '../app.settings';
export function dateValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = !moment(AppSettings.convertDate(control.value), 'DD/MM/YYYY', true).isValid();
    return forbidden ? { forbiddenDate: { value: control.value } } : null;
  };
}
