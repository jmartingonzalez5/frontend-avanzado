import { Component, OnInit } from '@angular/core';
import {ProfileStudent} from '../../../../shared/models/profileStudent';
import {Router} from '@angular/router';
import {ProfileStudentsService} from '../../../../shared/services/profileStudents.service';

@Component({
  selector: 'app-idiomas-tabla',
  templateUrl: './idiomas-tabla.component.html',
  styleUrls: ['./idiomas-tabla.component.scss']
})
export class IdiomasTablaComponent implements OnInit {


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

    borrarIdioma(index: number){
        if (confirm("Confirmas el borrado del Idioma: " + this.profileStudent.idiomas[index].idioma + " (" + this.profileStudent.idiomas[index].nivel + ") ?")) {
            this.profileStudent.idiomas = this.profileStudent.idiomas.filter((_, i) => i !== index);
        }
    }


    editarIdioma(index: number){
        this.router.navigate(['/user/profile/profile-student/idiomas-form', index]);
    }


    nuevoIdioma(){
        this.router.navigate(['/user/profile/profile-student/idiomas-form-nuevo']);
    }



}
