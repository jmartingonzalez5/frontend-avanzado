import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user';
import {Router} from '@angular/router';
import {UsersService} from '../../shared/services/users.service';
import {AppSettings} from '../../shared/app.settings';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userLogueado: User;

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    this.getUsuarioLogueado();
  }


    getUsuarioLogueado() {
        this.usersService.getUsuarioLogueado().subscribe(data => {
            this.userLogueado = data;

            if(typeof this.userLogueado !== 'undefined') {
                console.log('    ' + this.userLogueado.id);
                console.log('    ' + this.userLogueado.email);
                console.log('    ' + this.userLogueado.rol);
                if (this.userLogueado.rol === AppSettings.STUDENT_ROL.value){
                    console.log('    ESTUDIANTE  !!!! ');
                }
                if (this.userLogueado.rol === AppSettings.COMPANY_ROL.value){
                    console.log('    EMPRESA !!!! ');
                }
            }else{
                // Redirigir a login
                this.router.navigate(['/signin']);
            }

        });

    }




}
