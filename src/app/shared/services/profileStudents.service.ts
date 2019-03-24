import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {ProfileStudent} from '../models/profileStudent';
import {AppSettings} from '../app.settings';

@Injectable({
    providedIn: 'root'
})

export class ProfileStudentsService {

    private profileStudentLogueado: ProfileStudent;
    base_url: string = 'http://mybackend.com/api/';
    profileStudents_endpoint = 'profileStudents';


    constructor(private http: HttpClient) {}



    setProfileStudentLogueado(id){
        // Se recupera el profileStudent en función de su id:
        this.getProfileStudent(id).subscribe(data => {
            this.profileStudentLogueado = data;
        });
    }

    getProfileStudentLogueado(): Observable<ProfileStudent>{
        return of(this.profileStudentLogueado as ProfileStudent);
    }


    getProfileStudents() {
        return this.http.get<ProfileStudent[]>(this.base_url + this.profileStudents_endpoint);
    }

    getProfileStudent(profileId) {
        return this.http.get<ProfileStudent>(`${this.base_url + this.profileStudents_endpoint}/${profileId}`);
    }

    createProfileStudent(profileStudent) {
        return this.http.post<ProfileStudent>(this.base_url + this.profileStudents_endpoint, profileStudent);
    }

    updateProfileStudent(update) {
        return this.http.put<ProfileStudent>(this.base_url + this.profileStudents_endpoint, update);
    }

    deleteProfileStudent(profileStudentId) {
        return this.http.delete<ProfileStudent>(`${this.base_url + this.profileStudents_endpoint}/${profileStudentId}`);
    }

}
