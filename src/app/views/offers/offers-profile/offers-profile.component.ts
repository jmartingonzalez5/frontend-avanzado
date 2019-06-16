import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OffersService } from '../../../../app/shared/services/offers.service';
import { Offer } from '../../../../app/shared/models/offer.model';
import { ProfileService } from '../../../../app/shared/services/profile.service';
import { User } from '../../../../app/shared/models/user.model';
import {AppSettings} from '../../../shared/app.settings';


@Component({
  selector: 'app-offers-profile',
  templateUrl: './offers-profile.component.html'
})



export class OffersProfileComponent implements OnChanges {
  @Input() user: User;
  offers: Offer[] = [];

  displayedColumnsTableMisOfertas: string[] = ['Puesto', 'Empresa', 'Familia', 'Fecha', 'Provincia', 'Municipio', 'Acciones'];

  constructor() {}
  ngOnChanges() {
    this.offers = this.user.offers;
  }

    convertDate(inputFormat) {
        return AppSettings.convertDate(inputFormat);
    }
}
