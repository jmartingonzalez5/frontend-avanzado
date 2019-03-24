import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {ProfileStudentsService} from './profileStudents.service';
import {ProfileCompaniesService} from './profileCompanies.service';
import {AppSettings} from '../app.settings';


// @Injectable()
@Injectable({
    providedIn: 'root'
})

export class UsersService {

    private usuarioLogueado: User;
    private base_url: string = 'http://mybackend.com/api/';
    private user_endpoint = 'users';
    private idUsuarioLogueado: string;

    /*
    private mockUserStudent = {
        id: '5a7b73f7c576e368b321a705',
        email: 'lessiewise@affluex.com',
        password: 'abcd',
        rol: 'student',
        isActive: true
    };
    */
    /*
    private mockUserCompany = {
        id: '5a7b73f7f79f4250b96a355a',
        email: 'elenabennett@fibrodyne.com',
        password: '1234',
        rol: 'company',
        isActive: true
    };
    */

    constructor(private http: HttpClient, private profileStudentsService: ProfileStudentsService, private profileCompaniesService: ProfileCompaniesService) {}


    setIdUsuarioLogueado(id){
        this.idUsuarioLogueado = id;
        // Se recupera el usuario del id usuario que acaba de hacer login:
        this.getUser(id).subscribe(data => {
            this.usuarioLogueado = data;
            // Si el usuario logueado es un Estudiante:
            if (this.usuarioLogueado.rol === AppSettings.STUDENT_ROL.value){
                this.profileStudentsService.setProfileStudentLogueado(id);
            }
            // Si el usuario logueado es una Empresa:
            if (this.usuarioLogueado.rol === AppSettings.COMPANY_ROL.value){
                this.profileCompaniesService.setProfileCompanyLogueado(id);
            }

        });
    }

    getUsuarioLogueado(): Observable<User>{
        return of(this.usuarioLogueado as User);
    }

    getUserEmailPassword(email, password) {
        return this.http.get<User[]>(`${this.base_url + this.user_endpoint}/?email=${email}&password=${password}`);
    }

    getUsers() {
        return this.http.get<User[]>(this.base_url + this.user_endpoint);
    }

    getUser(userId) {
        return this.http.get<User>(`${this.base_url + this.user_endpoint}/${userId}`);
    }

    createUser(user) {
        return this.http.post<User>(this.base_url + this.user_endpoint, user);
    }

    updateUser(update) {
        return this.http.put<User>(this.base_url + this.user_endpoint, update);
    }

    deleteUser(userId) {
        return this.http.delete<User>(`${this.base_url + this.user_endpoint}/${userId}`);
    }

}
