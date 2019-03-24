import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-exper-laboral-form',
  templateUrl: './exper-laboral-form.component.html',
  styleUrls: ['./exper-laboral-form.component.scss']
})
export class ExperLaboralFormComponent implements OnInit {
    /*
    datosPersForm = this.fb.group({
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        fechaNacimiento: [''],
        tfnoContacto: [''],
        tfnoAlternativo: [''],
        tipoDocumento: [''],
        numDocumento: [''],
        direc: this.fb.group({
            direccion: [''],
            provincia: [''],
            municipio: ['']
        }),
        masDatos: this.fb.group({
            sobreMi: [''],
            otrasCompetencias: [''],
            permisosConducir: ['']
        })
    });
    */

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

}
