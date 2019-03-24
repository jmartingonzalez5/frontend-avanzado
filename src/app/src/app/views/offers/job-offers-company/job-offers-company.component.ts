import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user';

@Component({
  selector: 'app-job-offers-company',
  templateUrl: './job-offers-company.component.html',
  styleUrls: ['./job-offers-company.component.scss']
})
export class JobOffersCompanyComponent implements OnInit {

    @Input() company: User;

    constructor() { }

    ngOnInit() {
    }
}
