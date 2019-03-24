import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, of} from 'rxjs';
import {Grado} from '../models/grado';


@Injectable({
  providedIn: 'root'
})
export class GradosService {

    grados: Grado[] = [
        {id: 1, nombre: 'Superior'},
        {id: 2, nombre: 'Medio'},
        {id: 3, nombre: 'FP Básica'}
    ];


    constructor(){}

    getGrados(): Observable <Grado[]>{
        return of(this.grados);
    }

}
