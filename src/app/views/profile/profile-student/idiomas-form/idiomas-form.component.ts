import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProfileStudent} from '../../../../shared/models/profileStudent';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileStudentsService} from '../../../../shared/services/profileStudents.service';
import {Idioma} from '../../../../shared/models/idioma';
import {BasicValidators} from '../../../../shared/validators/basic-validators';

@Component({
  selector: 'app-idiomas-form',
  templateUrl: './idiomas-form.component.html',
  styleUrls: ['./idiomas-form.component.scss']
})
export class IdiomasFormComponent implements OnInit {

    profileStudent: ProfileStudent;
    idiomaStudent: Idioma;

    titulo: string;
    indexMod: number;

    idiomaForm = this.fb.group({
        idioma: ['', Validators.required],
        otroIdioma: ['', [Validators.minLength(3), Validators.maxLength(255)]],
        nivel: ['', Validators.required],
        fecha: ['']
    });

    constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private profileStudentsService: ProfileStudentsService) { }


    ngOnInit() {
        this.idiomaStudent = new Idioma();

        this.route.params.subscribe(params => {
            this.indexMod = params['index'];

            if (!this.indexMod){
                this.titulo = 'Idioma Nuevo';
            }else{
                this.titulo = 'Modificar Idioma';
            }

            this.getProfileStudentLogueado();

        });
    }

    getProfileStudentLogueado(){
        this.profileStudentsService.getProfileStudentLogueado().subscribe( data => {
            this.profileStudent = data;

            if (typeof this.profileStudent !== 'undefined') {
                if (this.indexMod) {
                    this.idiomaStudent = this.profileStudent.idiomas[this.indexMod];
                    // Inicializar el formulario idiomaForm:
                    this.idiomaForm.get('idioma').setValue(this.idiomaStudent.idioma);
                    this.idiomaForm.get('nivel').setValue(this.idiomaStudent.nivel);
                    this.idiomaForm.get('fecha').setValue(this.idiomaStudent.fecha);
                }

                // Validador del campo otroIdioma: es obligatorio (no puede quedar vacío)
                // solo en el caso de haber seleccionado la opción "Otros" en la lista del Idioma
                // (no pertenece a un control sino a todo el grupo)
                this.idiomaForm.setValidators(BasicValidators.otroIdioma);

            }else{
                // Redirigir a login:
                this.router.navigate(['/signin']);
            }
        });
    }



    guardarIdioma(){
        console.log('Dentro de guardar Idioma');
        var result;

        if (this.titulo === 'Idioma Nuevo'){
            this.profileStudent.idiomas.push(this.idiomaStudent);
        }else{
            this.profileStudent.idiomas[this.indexMod] = this.idiomaStudent;
        }
        result = this.profileStudentsService.updateProfileStudent(this.profileStudent);
        result.subscribe(data => this.router.navigate(['user/profile']));
    }

}
