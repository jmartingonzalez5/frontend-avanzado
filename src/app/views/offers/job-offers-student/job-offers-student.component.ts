import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user';
import {ProfileStudent} from '../../../shared/models/profileStudent';
import {Router} from '@angular/router';
import {ProfileStudentsService} from '../../../shared/services/profileStudents.service';
import {JobOffer} from '../../../shared/models/jobOffer';
import {JobOffersService} from '../../../shared/services/job-offers.service';

@Component({
  selector: 'app-job-offers-student',
  templateUrl: './job-offers-student.component.html',
  styleUrls: ['./job-offers-student.component.scss']
})
export class JobOffersStudentComponent implements OnInit {

    @Input() student: User;

    profileStudent: ProfileStudent;
    jobOffers: JobOffer[] = [];

    constructor(private router: Router, private profileStudentsService: ProfileStudentsService, private jobOffersService: JobOffersService) { }

    ngOnInit() {
        this.getProfileStudentLogueado();
    }

    getProfileStudentLogueado(){
        this.profileStudentsService.getProfileStudentLogueado().subscribe( data => {
            this.profileStudent = data;

            if (typeof this.profileStudent === 'undefined'){
                // Redirigir a login:
                this.router.navigate(['/' + 'signin']);
            }else{

                this.getJobOffers();
            }
        });

    }

    getJobOffers(){
        this.jobOffersService.getJobOffers().subscribe( data => {
            this.jobOffers = data;

        });

    }

    verDetalleOferta(index: number){
        this.router.navigate(['/user/offers/detalle', index]);
    }

    mostrarOferta(familiaProfesionalOferta: string){
        // Se busca la familiaProfesionalOferta en el campo Título de los Títulos Universitarios
        var result = this.profileStudent.titulosUniversitarios.find(x => x.titulo === familiaProfesionalOferta);
        // Si el resultado es distinto de undefined ... significa que se ha encontrado un objeto que coincide con la búsqueda:
        if (typeof result !== 'undefined') return true;

        // Si no se ha encontrado como Título Universitario .. buscarlo en los Ciclos Formativos:
        var result2 = this.profileStudent.ciclosFormativos.find(x => x.familiaProfesional === familiaProfesionalOferta);
        if (typeof result2 !== 'undefined') return true;
        // Devolver falso: no se ha encontrado ni como título universitario ni dentro de una de las familias profesionales
        // de los ciclos formativos del usuario
        return false;
    }
}

