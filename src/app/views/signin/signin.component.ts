
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BasicValidators} from '../../shared/validators/basic-validators';
import {Router} from '@angular/router';
import {UsersService} from '../../shared/services/users.service';
import {ProfileStudent} from '../../shared/models/profileStudent';
import {User} from '../../shared/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    usuarios: User[] = [];
    errorLogin: string = '';

    signinForm = this.fb.group({
        email: ['lessiewise@affluex.com', [Validators.required, BasicValidators.email]],
        password: ['', Validators.required]
    });

  constructor(private fb: FormBuilder, private router: Router, private usersService: UsersService) { }


  ngOnInit() {
  }

  buttonLogin(){
        console.log('Enviando datos para comprobar el email/password ...');

        this.usersService.getUserEmailPassword(encodeURIComponent(this.signinForm.controls['email'].value), this.signinForm.controls['password'].value).subscribe( data => {
            this.usuarios = data;
            console.log(this.usuarios);
            if (this.usuarios.length > 0){
                if ((this.usuarios[0].email === this.signinForm.controls['email'].value) && (this.usuarios[0].password === this.signinForm.controls['password'].value)){
                    // Usuario logueado correctamente:
                    if ((this.usuarios[0].isActive)){

                        // Establecer el id del usuario logueado:
                        this.usersService.setIdUsuarioLogueado(this.usuarios[0].id);

                        console.log('Redirigir a la vista dashboard ...');
                        this.router.navigate(['/user/dashboard']);

                    }else{
                        console.log("Error: usuario no está activo");
                        this.errorLogin = 'Error, el usuario no está activo';
                    }
                }else{
                    console.log("Error: usuario no encontrado");
                    this.errorLogin = 'Error, usuario no encontrado';
                }
            }else{
                console.log("Error: usuario no encontrado");
                this.errorLogin = 'Error, usuario no encontrado';
            }
        })


      /*

    this.appservice.getTaskDescription("Paint the garage 00").subscribe( data => {
      this.tareas = data;
      if (this.tareas.length > 0){
        console.log("PRUEBA: " + this.tareas);
        console.log("ID: " + this.tareas[0].id);
        console.log("DESCRIPCION: " + this.tareas[0].description);
      }else{
        console.log("No existe esa descripcion");
      }
    });
       */

        // this.usersService.login(this.signinForm.controls['email'].value, this.signinForm.controls['password'].value);


        //console.log('Redirigir a la vista dashboard ...');
        //this.router.navigate(['/user/dashboard']);


  }
}