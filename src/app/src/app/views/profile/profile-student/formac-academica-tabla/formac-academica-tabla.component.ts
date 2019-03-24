import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfileStudent} from '../../../../shared/models/profileStudent';
import {ProfileStudentsService} from '../../../../shared/services/profileStudents.service';

@Component({
  selector: 'app-formac-academica-tabla',
  templateUrl: './formac-academica-tabla.component.html',
  styleUrls: ['./formac-academica-tabla.component.scss']
})
export class FormacAcademicaTablaComponent implements OnInit {


    profileStudent: ProfileStudent;

    constructor(private router: Router, private profileStudentsService: ProfileStudentsService) { }

    ngOnInit() {
        this.getProfileStudentLogueado();
    }

    getProfileStudentLogueado(){
        this.profileStudentsService.getProfileStudentLogueado().subscribe( data => {
            this.profileStudent = data;

            if (typeof this.profileStudent === 'undefined'){
                // Redirigir a login:
                this.router.navigate(['/signin']);
            }
        });
    }

    borrarFormacionUniversitaria(index: number){
        if (confirm("Confirmas el borrado de la formacion Universitaria:" + this.profileStudent.titulosUniversitarios[index].titulo + "?")) {
            this.profileStudent.titulosUniversitarios = this.profileStudent.titulosUniversitarios.filter((_, i) => i !== index);
        }
    }


    borrarFormacionCiclos(index: number){
        if (confirm("Confirmas el borrado de la formacion del Ciclos" + this.profileStudent.ciclosFormativos[index].ciclo + "?")) {
            this.profileStudent.ciclosFormativos = this.profileStudent.ciclosFormativos.filter((_, i) => i !== index);
        }
    }

    editarFormacionUniversitaria(index: number){
        this.router.navigate(['/user/profile/profile-student/formac-academica-form', 'Universidad', index]);
    }

    editarFormacionCiclos(index: number){
        this.router.navigate(['/user/profile/profile-student/formac-academica-form', 'Ciclos', index]);
    }

    nuevaFormacion(){
        this.router.navigate(['/user/profile/profile-student/formac-academica-form-nuevo']);
    }



}
