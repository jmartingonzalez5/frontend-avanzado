import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user';
import {ProfileStudent} from '../../../shared/models/profileStudent';
import {ProfileStudentsService} from '../../../shared/services/profileStudents.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent implements OnInit {

    @Input() student: User;

    profileStudent: ProfileStudent;

    constructor(private router: Router, private profileStudentsService: ProfileStudentsService) { }

    ngOnInit() {
        this.getProfileStudentLogueado();
    }

    getProfileStudentLogueado(){
        this.profileStudentsService.getProfileStudentLogueado().subscribe( data => {
            this.profileStudent = data;

            if (typeof this.profileStudent === 'undefined'){
                // Redirigir a login:
                this.router.navigate(['/signin']);
            }
        });

    }

}
