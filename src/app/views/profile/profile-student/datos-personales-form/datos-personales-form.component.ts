import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileStudentsService} from '../../../../shared/services/profileStudents.service';
import {ProfileStudent} from '../../../../shared/models/profileStudent';
import {BasicValidators} from '../../../../shared/validators/basic-validators';
import {Router} from '@angular/router';
import {ProvinciasService} from '../../../../shared/services/provincias.service';
import {Provincia} from '../../../../shared/models/provincia';
import {Municipio} from '../../../../shared/models/municipio';
import {MunicipiosService} from '../../../../shared/services/municipios.service';
import {FamiliaProfesional} from '../../../../shared/models/familiaProfesional';

@Component({
    selector: 'app-datos-personales-form',
    templateUrl: './datos-personales-form.component.html',
    styleUrls: ['./datos-personales-form.component.scss']
})
export class DatosPersonalesFormComponent implements OnInit {

    profileStudent: ProfileStudent;
    provincias: Provincia[] = [];
    municipios: Municipio[] = [];


    datosPersForm = this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55), BasicValidators.nombreApellido]],
        apellidos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55), BasicValidators.nombreApellido]],
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





    constructor(private fb: FormBuilder, private profileStudentsService: ProfileStudentsService, private provinciasService: ProvinciasService, private municipiosService: MunicipiosService, private router: Router) { }

    ngOnInit() {
        this.getProfileStudent();
        this.getProvincias();
        this.getMunicipios();
    }


    getProvincias() {
        this.provinciasService.getProvincias().subscribe(data => {
            this.provincias = data;
        });
    }

    getMunicipios() {
        /*
        this.municipiosService.getMunicipios().subscribe(data => {
            this.municipios = data;
        });
        */
        this.actualizarListaMunicipios();
    }

    actualizarListaMunicipios(){
        this.municipios = this.provincias.find(x=>x.nombre === this.datosPersForm.get('direc.provincia').value).municipios;
    }

    getProfileStudent(){
        this.profileStudentsService.getProfileStudentLogueado().subscribe( data => {
            this.profileStudent = data;

            if (typeof this.profileStudent !== 'undefined') {
                // Inicializar el formulario:

                this.datosPersForm.get('nombre').setValue(this.profileStudent.nombre);
                this.datosPersForm.get('apellidos').setValue(this.profileStudent.apellidos);
                this.datosPersForm.get('fechaNacimiento').setValue(this.profileStudent.fechaNacimiento);
                this.datosPersForm.get('tfnoContacto').setValue(this.profileStudent.tfnoContacto);
                this.datosPersForm.get('tfnoAlternativo').setValue(this.profileStudent.tfnoAlternativo);
                this.datosPersForm.get('tipoDocumento').setValue(this.profileStudent.tipoDocumento);
                this.datosPersForm.get('numDocumento').setValue(this.profileStudent.numDocumento);
                this.datosPersForm.get('direc.direccion').setValue(this.profileStudent.direccion);
                this.datosPersForm.get('direc.provincia').setValue(this.profileStudent.provincia);
                this.datosPersForm.get('direc.municipio').setValue(this.profileStudent.municipio);
                this.datosPersForm.get('masDatos.sobreMi').setValue(this.profileStudent.sobreMi);
                this.datosPersForm.get('masDatos.otrasCompetencias').setValue(this.profileStudent.otrasCompetencias);
                this.datosPersForm.get('masDatos.permisosConducir').setValue(this.profileStudent.permisosConducir);

                // Validador del tipo y número de Documento (no pertenece a un control sino a todo el grupo)
                this.datosPersForm.setValidators(BasicValidators.tipoNumDocumento);


            }else{
                // Redirigir a login:
                this.router.navigate(['/signin']);
            }


        });
    }

    guardar(){

        var result;

        result = this.profileStudentsService.updateProfileStudent(this.profileStudent);
        result.subscribe(data => this.router.navigate(['user/profile']));
    }



}

