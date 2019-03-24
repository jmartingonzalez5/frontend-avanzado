import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileStudentsService} from '../../../../shared/services/profileStudents.service';
import {ProfileStudent} from '../../../../shared/models/profileStudent';
import {TituloUniversitarioStudent} from '../../../../shared/models/TituloUniversitarioStudent';
import {TituloCicloFormativoStudent} from '../../../../shared/models/TituloCicloFormativoStudent';
import {CentrosEducativosService} from '../../../../shared/services/centrosEducativos.service';
import {CiclosService} from '../../../../shared/services/ciclos.service';
import {GradosService} from '../../../../shared/services/grados.service';
import {FamiliasProfesionalesService} from '../../../../shared/services/familiasProfesionales.service';
import {CentroEducativo} from '../../../../shared/models/centroEducativo';
import {Ciclo} from '../../../../shared/models/ciclo';
import {FamiliaProfesional} from '../../../../shared/models/familiaProfesional';
import {Grado} from '../../../../shared/models/grado';

@Component({
  selector: 'app-formac-academica-form',
  templateUrl: './formac-academica-form.component.html',
  styleUrls: ['./formac-academica-form.component.scss']
})
export class FormacAcademicaFormComponent implements OnInit {

    profileStudent: ProfileStudent;
    tituloUniversitario: TituloUniversitarioStudent;
    cicloFormativo: TituloCicloFormativoStudent;
    centrosEducativos: CentroEducativo[] = [];
    ciclos: Ciclo[] = [];
    familiasProfesionales: FamiliaProfesional[] = [];
    grados: Grado[] = [];


    titulo: string;
    tipoFormacion: string;
    indexMod: number;
    deshabilitarTipoDocumento: boolean;


    tituloUniversitarioForm = this.fb.group({
        centro: ['', Validators.required],
        titulo: ['', Validators.required],
        fechaTitulo: [''],
        bilingue: [''],
        certificado: ['']
    });

    cicloFormativoForm = this.fb.group({
        centroEducativo: ['', Validators.required],
        familiaProfesional: ['', Validators.required],
        grado: ['', Validators.required],
        ciclo: ['', Validators.required],
        fechaTitulo: [''],
        dual: [''],
        bilingue: [''],
        certificado: ['']
    });


    constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private profileStudentsService: ProfileStudentsService,
                private centrosEducativosService: CentrosEducativosService, private ciclosService: CiclosService,
                private familiasProfesionalesService: FamiliasProfesionalesService, private gradosService: GradosService) { }


    ngOnInit() {
        this.tituloUniversitario = new TituloUniversitarioStudent();
        this.cicloFormativo = new TituloCicloFormativoStudent();

        this.route.params.subscribe(params => {
            this.tipoFormacion = params['tipo'];
            this.indexMod = params['index'];
            this.deshabilitarTipoDocumento = true;

            if (!this.indexMod){
                this.titulo = 'Nueva Formación';
                this.deshabilitarTipoDocumento = false;
            }
            if (this.tipoFormacion === 'Universidad') this.titulo = 'Modificar Formación Universitaria';
            if (this.tipoFormacion === 'Ciclos') this.titulo = 'Modificar Formación Ciclos Formativos';

            this.getProfileStudentLogueado();
            this.getCentrosEducativos();
            this.getCiclos();
            this.getFamiliasProfesionales();
            this.getGrados();

        });
    }



    getProfileStudentLogueado(){
        this.profileStudentsService.getProfileStudentLogueado().subscribe( data => {
            this.profileStudent = data;

            if (typeof this.profileStudent !== 'undefined') {
                if (this.tipoFormacion === 'Universidad'){
                    this.tituloUniversitario = this.profileStudent.titulosUniversitarios[this.indexMod];
                    // Inicializar el formulario tituloUniversitarioForm:
                    this.tituloUniversitarioForm.get('centro').setValue(this.tituloUniversitario.centro);
                    this.tituloUniversitarioForm.get('titulo').setValue(this.tituloUniversitario.titulo);
                    this.tituloUniversitarioForm.get('fechaTitulo').setValue(this.tituloUniversitario.fechaTitulo);
                    this.tituloUniversitarioForm.get('bilingue').setValue(this.tituloUniversitario.bilingue);
                    this.tituloUniversitarioForm.get('certificado').setValue(this.tituloUniversitario.certificado);
                }
                if (this.tipoFormacion === 'Ciclos'){
                    this.cicloFormativo = this.profileStudent.ciclosFormativos[this.indexMod];
                    // Inicializar el formulario cicloFormativoForm:
                    this.cicloFormativoForm.get('centroEducativo').setValue(this.cicloFormativo.centroEducativo);
                    this.cicloFormativoForm.get('grado').setValue(this.cicloFormativo.grado);
                    this.cicloFormativoForm.get('ciclo').setValue(this.cicloFormativo.ciclo);
                    this.cicloFormativoForm.get('fechaTitulo').setValue(this.cicloFormativo.fechaTitulo);
                    this.cicloFormativoForm.get('dual').setValue(this.cicloFormativo.dual);
                    this.cicloFormativoForm.get('bilingue').setValue(this.cicloFormativo.bilingue);
                    this.cicloFormativoForm.get('certificado').setValue(this.cicloFormativo.certificado);
                }
            }else{
                // Redirigir a login:
                this.router.navigate(['/signin']);
            }
        });
    }


    getCentrosEducativos() {
        this.centrosEducativosService.getCentrosEducativos().subscribe(data => {
            this.centrosEducativos = data;
        });
    }

    getCiclos() {
        this.ciclosService.getCiclos().subscribe(data => {
            this.ciclos = data;
        });
    }

    getFamiliasProfesionales() {
        this.familiasProfesionalesService.getFamiliasProfesionales().subscribe(data => {
            this.familiasProfesionales = data;
        });
    }

    getGrados() {
        this.gradosService.getGrados().subscribe(data => {
            this.grados = data;
        });
    }

    guardarTituloUniversitario(){
        var result;

        if (this.titulo === 'Nueva Formación'){
            this.profileStudent.titulosUniversitarios.push(this.tituloUniversitario);
        }else{
            this.profileStudent.titulosUniversitarios[this.indexMod] = this.tituloUniversitario;
        }
        result = this.profileStudentsService.updateProfileStudent(this.profileStudent);
        result.subscribe(data => this.router.navigate(['user/profile']));
    }

    guardarCicloFormativo(){
        var result;

        if (this.titulo === 'Nueva Formación'){
            this.profileStudent.ciclosFormativos.push(this.cicloFormativo);
        }else{
            this.profileStudent.ciclosFormativos[this.indexMod] = this.cicloFormativo;
        }

        result = this.profileStudentsService.updateProfileStudent(this.profileStudent);
        result.subscribe(data => this.router.navigate(['user/profile']));
    }

}
