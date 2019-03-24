import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, of} from 'rxjs';
import {Ciclo} from '../models/ciclo';


@Injectable({
  providedIn: 'root'
})
export class CiclosService {


    ciclos: Ciclo[] = [
        {id: 1, idFamiliaProfesional: 1, idGrado: 1, nombre: 'Desarrollo de Aplicaciones Web'},
        {id: 2, idFamiliaProfesional: 1, idGrado: 1, nombre: 'Administración de Sistemas Informáticos en Red'},
        {id: 3, idFamiliaProfesional: 1, idGrado: 1, nombre: 'Desarrollo de Aplicaciones Multiplataforma'},
        {id: 4, idFamiliaProfesional: 1, idGrado: 2, nombre: 'Sistemas Microinformáticos y Redes'},
        {id: 5, idFamiliaProfesional: 2, idGrado: 1, nombre: 'Audiología Protésica'},
        {id: 6, idFamiliaProfesional: 2, idGrado: 1, nombre: 'Higiene Bucodental'},
        {id: 7, idFamiliaProfesional: 2, idGrado: 1, nombre: 'Laboratorio Clínico y Biomédico'},
        {id: 8, idFamiliaProfesional: 2, idGrado: 2, nombre: 'Farmacia y Parafarmacia'}
        // ... incluir todos los ciclos ...
    ];


    constructor(){}

    getCiclos(): Observable <Ciclo[]>{
        return of(this.ciclos);
    }

}
