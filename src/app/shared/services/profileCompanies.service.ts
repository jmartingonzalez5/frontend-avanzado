import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {ProfileCompany} from '../models/profileCompany';
import {Observable, of} from 'rxjs';
import {ProfileStudent} from '../models/profileStudent';

@Injectable({
    providedIn: 'root'
})

export class ProfileCompaniesService {

    private profileCompanyLogueado: ProfileCompany;
    base_url: string = 'http://mybackend.com/api/';
    profileCompanies_endpoint = 'profileCompanies';

    constructor(private http: HttpClient) {}

    setProfileCompanyLogueado(id){
        // Se recupera el profileCompany en función de su id:
        this.getProfileCompany(id).subscribe(data => {
            this.profileCompanyLogueado = data;
        });
    }

    getProfileCompanyLogueado(): Observable<ProfileCompany>{
        return of(this.profileCompanyLogueado as ProfileCompany);
    }


    getProfileCompanies() {
        return this.http.get<ProfileCompany[]>(this.base_url + this.profileCompanies_endpoint);
    }

    getProfileCompany(profileId) {
        return this.http.get<ProfileCompany>(`${this.base_url + this.profileCompanies_endpoint}/${profileId}`);
    }

    createProfileCompany(profileCompany) {
        return this.http.post<ProfileCompany>(this.base_url + this.profileCompanies_endpoint, profileCompany);
    }

    updateProfileCompany(update) {
        return this.http.put<ProfileCompany>(this.base_url + this.profileCompanies_endpoint, update);
    }

    deleteProfileCompany(profileCompanyId) {
        return this.http.delete<ProfileCompany>(`${this.base_url + this.profileCompanies_endpoint}/${profileCompanyId}`);
    }

}
