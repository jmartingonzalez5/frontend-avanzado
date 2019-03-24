import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {JobOffer} from '../../../shared/models/jobOffer';
import {JobOffersService} from '../../../shared/services/job-offers.service';
import {FamiliasProfesionalesService} from '../../../shared/services/familiasProfesionales.service';
import {CiclosService} from '../../../shared/services/ciclos.service';
import {FamiliaProfesional} from '../../../shared/models/familiaProfesional';
import {Ciclo} from '../../../shared/models/ciclo';

@Component({
  selector: 'app-job-offers-student-detalle',
  templateUrl: './job-offers-student-detalle.component.html',
  styleUrls: ['./job-offers-student-detalle.component.scss']
})
export class JobOffersStudentDetalleComponent implements OnInit {

    jobOffer: JobOffer;
    idJobOffer: number;
    idFamiliaProfesional: number;
    ciclosDeLaFamiliaProfesional: string[] = [];

    jobOfferDetalleForm = this.fb.group({

        empresa: [{value: '', disabled: true}],
        puesto: [{value: '', disabled: true}],
        descripcion: [{value: '', disabled: true}],
        provincia: [{value: '', disabled: true}],
        municipio: [{value: '', disabled: true}],
        familiaProfesional: [{value: '', disabled: true}],

    });



    constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private jobOffersService: JobOffersService,
                private familiasProfesionalesService: FamiliasProfesionalesService, private ciclosService: CiclosService) { }


    ngOnInit() {
        this.jobOffer = new JobOffer();

        this.route.params.subscribe(params => {
            this.idJobOffer = params['id'];

            this.getJobOffer();

        });
    }

    getJobOffer(){
        this.jobOffersService.getJobOffer(this.idJobOffer).subscribe( data => {
            this.jobOffer = data;

            // Inicializar el formulario jobOfferDetalleForm:
            this.jobOfferDetalleForm.get('empresa').setValue(this.jobOffer.empresa);
            this.jobOfferDetalleForm.get('puesto').setValue(this.jobOffer.puesto);
            this.jobOfferDetalleForm.get('descripcion').setValue(this.jobOffer.descripcion);
            this.jobOfferDetalleForm.get('provincia').setValue(this.jobOffer.provincia);
            this.jobOfferDetalleForm.get('municipio').setValue(this.jobOffer.municipio);
            this.jobOfferDetalleForm.get('familiaProfesional').setValue(this.jobOffer.familiaProfesional);

            this.familiasProfesionalesService.getFamiliasProfesionales().subscribe(data => {
                let familia: FamiliaProfesional = data.find(x=>x.nombre === this.jobOffer.familiaProfesional);

                // Si la "familiaProfesional" de la oferta hace referencia a una familia profesional
                // de un ciclo formativo --> se encontrará su id (idFamiliaProfesional)
                // Si en cambio hace referencia a un título universitario: el valor de familia sería undefined

                if (typeof familia !== 'undefined'){
                    this.idFamiliaProfesional = familia.id;


                    // Buscar los "ciclos" que coincidan con el idFamiliaProfesional:

                    /*
                    this.ciclosService.getCiclos().subscribe(data2 => {
                        this.ciclosDeLaFamiliaProfesional = data2.find(x=>x.idFamiliaProfesional === this.idFamiliaProfesional);
                    });
                    */
                    this.ciclosService.getCiclos().subscribe(data2 => {
                        let i: number;
                        for (i = 0; i < data2.length; i++){
                            if (data2[i].idFamiliaProfesional === this.idFamiliaProfesional) this.ciclosDeLaFamiliaProfesional.push(data2[i].nombre);
                        }
                    });
                }

            });

        });
    }





    inscripcionOferta(){
          if (confirm("Confirmas la Inscripción a la Oferta ?")) {
            console.log('Inscribirse a la oferta .... ');
          }
  }



}

