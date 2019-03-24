import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, of} from 'rxjs';
import {CentroEducativo} from '../models/centroEducativo';


@Injectable({
  providedIn: 'root'
})
export class CentrosEducativosService {

    centrosEducativos: CentroEducativo[] = [
        {id: 1, nombre: 'IES Laguna'},
        {id: 2, nombre: 'IES Alonso Madrigal'},
        {id: 3, nombre: 'IES Vasco de la Zarza'},
        {id: 4, nombre: 'IES Jorge Santayana'}
    ];


    constructor(){}

    getCentrosEducativos(): Observable <CentroEducativo[]>{
        return of(this.centrosEducativos);
    }

}
