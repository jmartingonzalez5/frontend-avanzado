import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, of} from 'rxjs';
import {FamiliaProfesional} from '../models/familiaProfesional';


@Injectable({
  providedIn: 'root'
})
export class FamiliasProfesionalesService {

    familiasProfesionales: FamiliaProfesional[] = [
        {id: 1, nombre: 'Informática y Comunicaciones'},
        {id: 2, nombre: 'Sanidad'}
        // Incluir todas las familias profesionales ....
    ];


    constructor(){}

    getFamiliasProfesionales(): Observable <FamiliaProfesional[]>{
        return of(this.familiasProfesionales);
    }

}
