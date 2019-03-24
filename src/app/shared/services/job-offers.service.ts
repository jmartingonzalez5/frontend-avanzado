import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {JobOffer} from '../models/jobOffer';


@Injectable({
  providedIn: 'root'
})
export class JobOffersService {

    base_url: string = 'http://mybackend.com/api/';
    jobOffers_endpoint = 'jobOffers';


    constructor(private http: HttpClient) {}

    getJobOffers() {
        return this.http.get<JobOffer[]>(this.base_url + this.jobOffers_endpoint);
    }

    getJobOffer(jobOfferId) {
        return this.http.get<JobOffer>(`${this.base_url + this.jobOffers_endpoint}/${jobOfferId}`);
    }

    createJobOffer(jobOffer) {
        return this.http.post<JobOffer>(this.base_url + this.jobOffers_endpoint, jobOffer);
    }

    updateJobOffer(update) {
        return this.http.put<JobOffer>(this.base_url + this.jobOffers_endpoint, update);
    }

    deleteJobOffer(jobOfferId) {
        return this.http.delete<JobOffer>(`${this.base_url + this.jobOffers_endpoint}/${jobOfferId}`);
    }

}
