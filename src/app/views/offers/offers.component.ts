import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user';
import {Router} from '@angular/router';
import {UsersService} from '../../shared/services/users.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

    userLogueado: User;

    constructor(private router: Router, private usersService: UsersService) { }

    ngOnInit() {
        this.getUsuarioLogueado();
    }


    getUsuarioLogueado() {
        this.usersService.getUsuarioLogueado().subscribe(data => {
            this.userLogueado = data;

            if(typeof this.userLogueado === 'undefined') {
                // Redirigir a login
                this.router.navigate(['/signin']);
            }

        });

    }




}
