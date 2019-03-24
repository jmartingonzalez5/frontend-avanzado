import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user';

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.scss']
})
export class ProfileCompanyComponent implements OnInit {

    @Input() company: User;

    constructor() { }

    ngOnInit() {
    }
}
