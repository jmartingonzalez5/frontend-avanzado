import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { OffersService } from '../../../../app/shared/services/offers.service';
import { Offer } from '../../../../app/shared/models/offer.model';
import { ProfileService } from '../../../../app/shared/services/profile.service';
import { User } from '../../../../app/shared/models/user.model';
import {AppSettings} from '../../../shared/app.settings';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html'
})
export class OffersListComponent implements OnChanges {
  @Input() user: User;
  @Input() offers: Offer[];
  offersStudy: Offer[] = [];
  offersOther: Offer[] = [];

  displayedColumnsTableTitulacion: string[] = ['Puesto', 'Empresa', 'Familia', 'Fecha', 'Provincia', 'Municipio', 'Inscrito', 'Acciones'];
  displayedColumnsTableOtrasOfertas: string[] = ['Puesto', 'Empresa', 'Familia', 'Fecha', 'Provincia', 'Municipio'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && changes.offers) {
      this.selectOffers();
    }
  }

  private selectOffers() {
    const studiesOfUser = this.user.studies;
    const offersOfUser = this.user.offers;
    this.offersStudy = this.offers
      .filter(offer =>
        studiesOfUser.some(study => study.uid === offer.category.uid)
      )
      .map(offer => {
        const offerUser = !!offersOfUser.find(
          _offerUser => _offerUser.id === offer.id
        );
        return { ...offer, subscribe: offerUser };
      });
    this.offersOther = this.offers.filter(offer =>
      studiesOfUser.every(study => study.uid !== offer.category.uid)
    );
  }

    convertDate(inputFormat) {
        return AppSettings.convertDate(inputFormat);
    }
}
