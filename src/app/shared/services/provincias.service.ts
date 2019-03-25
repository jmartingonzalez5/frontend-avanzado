import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, of} from 'rxjs';
import {Provincia} from '../models/provincia';


@Injectable({
    providedIn: 'root'
})
export class ProvinciasService {


    provincias: Provincia[] = [
        {
            id: '01',
            nombre: 'Araba/Álava',
            municipios: [{id: '01', idProvincia: '01', nombre: 'Araba/Álava'}]
        },
        {
            id: '02',
            nombre: 'Albacete',
            municipios: [{id: '02', idProvincia: '02', nombre: 'Albacete'}]
        },
        {
            id: '03',
            nombre: 'Alicante/Alacant',
            municipios: [{id: '03', idProvincia: '03', nombre: 'Alicante/Alacant'}]
        },
        {
            id: '04',
            nombre: 'Almería',
            municipios: [{id: '04', idProvincia: '04', nombre: 'Almería'}]
        },
        {
            id: '05',
            nombre: 'Ávila',
            municipios: [{id: '05', idProvincia: '05', nombre: 'Ávila'}]
        },
        {
            id: '06',
            nombre: 'Badajoz',
            municipios: [{id: '06', idProvincia: '06', nombre: 'Badajoz'}]
        },
        {
            id: '07',
            nombre: 'Balears, Illes',
            municipios: [{id: '07', idProvincia: '07', nombre: 'Balears, Illes'}]
        },
        {
            id: '08',
            nombre: 'Barcelona',
            municipios: [
                {id: '08', idProvincia: '08', nombre: 'Barcelona'},
                {id: '200', idProvincia: '08', nombre: 'Mura'},
                {id: '201', idProvincia: '08', nombre: 'Sitges'},
                {id: '202', idProvincia: '08', nombre: 'Rupit i Pruit'},
                {id: '203', idProvincia: '08', nombre: 'Caldes de Montbui'}
            ]
        },
        {
            id: '09',
            nombre: 'Burgos',
            municipios: [{id: '09', idProvincia: '09', nombre: 'Burgos'}]
        },
        {
            id: '10',
            nombre: 'Cáceres',
            municipios: [{id: '10', idProvincia: '10', nombre: 'Cáceres'}]
        },
        {
            id: '11',
            nombre: 'Cádiz',
            municipios: [{id: '11', idProvincia: '11', nombre: 'Cádiz'}]
        },
        {
            id: '12',
            nombre: 'Castellón/Castelló',
            municipios: [{id: '12', idProvincia: '12', nombre: 'Castellón/Castelló'}]
        },
        {
            id: '13',
            nombre: 'Ciudad Real',
            municipios: [{id: '13', idProvincia: '13', nombre: 'Ciudad Real'}]
        },
        {
            id: '14',
            nombre: 'Córdoba',
            municipios: [{id: '14', idProvincia: '14', nombre: 'Córdoba'}]
        },
        {
            id: '15',
            nombre: 'Coruña, A',
            municipios: [{id: '15', idProvincia: '15', nombre: 'Coruña, A'}]
        },
        {
            id: '16',
            nombre: 'Cuenca',
            municipios: [{id: '16', idProvincia: '16', nombre: 'Cuenca'}]
        },
        {
            id: '17',
            nombre: 'Girona',
            municipios: [{id: '17', idProvincia: '17', nombre: 'Girona'}]
        },
        {
            id: '18',
            nombre: 'Granada',
            municipios: [{id: '18', idProvincia: '18', nombre: 'Granada'}]
        },
        {
            id: '19',
            nombre: 'Guadalajara',
            municipios: [{id: '19', idProvincia: '19', nombre: 'Guadalajara'}]
        },
        {
            id: '20',
            nombre: 'Gipuzkoa',
            municipios: [{id: '20', idProvincia: '20', nombre: 'Gipuzkoa'}]
        },
        {
            id: '21',
            nombre: 'Huelva',
            municipios: [{id: '21', idProvincia: '21', nombre: 'Huelva'}]
        },
        {
            id: '22',
            nombre: 'Huesca',
            municipios: [{id: '22', idProvincia: '22', nombre: 'Huesca'}]
        },
        {
            id: '23',
            nombre: 'Jaén',
            municipios: [{id: '23', idProvincia: '23', nombre: 'Jaén'}]
        },
        {
            id: '24',
            nombre: 'León',
            municipios: [{id: '24', idProvincia: '24', nombre: 'León'}]
        },
        {
            id: '25',
            nombre: 'Lleida',
            municipios: [{id: '25', idProvincia: '25', nombre: 'Lleida'}]
        },
        {
            id: '26',
            nombre: 'Rioja, La',
            municipios: [{id: '26', idProvincia: '26', nombre: 'Rioja, La'}]
        },
        {
            id: '27',
            nombre: 'Lugo',
            municipios: [{id: '27', idProvincia: '27', nombre: 'Lugo'}]
        },
        {
            id: '28',
            nombre: 'Madrid',
            municipios: [
                {id: '28', idProvincia: '28', nombre: 'Madrid'},
                {id: '100', idProvincia: '28', nombre: 'San Lorenzo del Escorial'},
                {id: '101', idProvincia: '28', nombre: 'Aranjuez'},
                {id: '102', idProvincia: '28', nombre: 'Alcalá de Henares'},
                {id: '103', idProvincia: '28', nombre: 'Chinchón'}
            ]
        },
        {
            id: '29',
            nombre: 'Málaga',
            municipios: [{id: '29', idProvincia: '29', nombre: 'Málaga'}]
        },
        {
            id: '30',
            nombre: 'Murcia',
            municipios: [{id: '30', idProvincia: '30', nombre: 'Murcia'}]
        },
        {
            id: '31',
            nombre: 'Navarra',
            municipios: [{id: '31', idProvincia: '31', nombre: 'Navarra'}]
        },
        {
            id: '32',
            nombre: 'Ourense',
            municipios: [{id: '32', idProvincia: '32', nombre: 'Ourense'}]
        },
        {
            id: '33',
            nombre: 'Asturias',
            municipios: [{id: '33', idProvincia: '33', nombre: 'Asturias'}]
        },
        {
            id: '34',
            nombre: 'Palencia',
            municipios: [{id: '34', idProvincia: '34', nombre: 'Palencia'}]
        },
        {
            id: '35',
            nombre: 'Palmas, Las',
            municipios: [{id: '35', idProvincia: '35', nombre: 'Palmas, Las'}]
        },
        {
            id: '36',
            nombre: 'Pontevedra',
            municipios: [{id: '36', idProvincia: '36', nombre: 'Pontevedra'}]
        },
        {
            id: '37',
            nombre: 'Salamanca',
            municipios: [{id: '37', idProvincia: '37', nombre: 'Salamanca'}]
        },
        {
            id: '38',
            nombre: 'Santa Cruz de Tenerife',
            municipios: [{id: '38', idProvincia: '38', nombre: 'Santa Cruz de Tenerife'}]
        },
        {
            id: '39',
            nombre: 'Cantabria',
            municipios: [{id: '39', idProvincia: '39', nombre: 'Cantabria'}]
        },
        {
            id: '40',
            nombre: 'Segovia',
            municipios: [{id: '40', idProvincia: '40', nombre: 'Segovia'}]
        },
        {
            id: '41',
            nombre: 'Sevilla',
            municipios: [{id: '41', idProvincia: '41', nombre: 'Sevilla'}]
        },
        {
            id: '42',
            nombre: 'Soria',
            municipios: [{id: '42', idProvincia: '42', nombre: 'Soria'}]
        },
        {
            id: '43',
            nombre: 'Tarragona',
            municipios: [{id: '43', idProvincia: '43', nombre: 'Tarragona'}]
        },
        {
            id: '44',
            nombre: 'Teruel',
            municipios: [{id: '44', idProvincia: '44', nombre: 'Teruel'}]
        },
        {
            id: '45',
            nombre: 'Toledo',
            municipios: [{id: '45', idProvincia: '45', nombre: 'Toledo'}]
        },
        {
            id: '46',
            nombre: 'Valencia/València',
            municipios: [{id: '46', idProvincia: '46', nombre: 'Valencia/València'}]
        },
        {
            id: '47',
            nombre: 'Valladolid',
            municipios: [{id: '47', idProvincia: '47', nombre: 'Valladolid'}]
        },
        {
            id: '48',
            nombre: 'Bizkaia',
            municipios: [{id: '48', idProvincia: '48', nombre: 'Bizkaia'}]
        },
        {
            id: '49',
            nombre: 'Zamora',
            municipios: [{id: '49', idProvincia: '49', nombre: 'Zamora'}]
        },
        {
            id: '50',
            nombre: 'Zaragoza',
            municipios: [{id: '50', idProvincia: '50', nombre: 'Zaragoza'}]
        },
        {
            id: '51',
            nombre: 'Ceuta',
            municipios: [{id: '51', idProvincia: '51', nombre: 'Ceuta'}]
        },
        {
            id: '52',
            nombre: 'Melilla',
            municipios: [{id: '52', idProvincia: '52', nombre: 'Melilla'}]
        }
    ];


    constructor() {}

    getProvincias(): Observable <Provincia[]>{
        return of(this.provincias);
    }

}
