import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserDB } from './users';
import {ProfileStudentDB} from './profileStudents';
import {ProfileCompanyDB} from './profileCompanies';
import {JobOfferDB} from './jobOffers';

export class InMemoryDataService implements InMemoryDbService{

    private userDB = new UserDB();
    private profileStudentDB = new ProfileStudentDB();
    private profileCompanyDB = new ProfileCompanyDB();
    private jobOfferDB = new JobOfferDB();


    createDb() {

      return {
          users: this.userDB.users,
          profileStudents: this.profileStudentDB.profileStudents,
          profileCompanies: this.profileCompanyDB.profileCompanies,
          jobOffers: this.jobOfferDB.jobOffers
      };
  }
}
