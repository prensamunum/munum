import { Component, OnInit } from '@angular/core';
import {StaffService} from '../services/staff/staff.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    userProfile = {
        name: '',
        lastName: '',
        email: '',
        birth: '',
        idType: '',
        idNumber: '',
        cellphone: '',
        country: '',
        city: '',
        institution: '',
        degree: '',
        vegetarian: '',
        blood: '',
        insurance: '',
        specialCondition: '',
        contactName: '',
        contactPhone: '',
        numberMun: ''
    };
    err: any;

  constructor(private staffService: StaffService) {
      this.staffService.meStaff()
          .subscribe(
              userProfile => {
                  this.userProfile = userProfile;
              },
              err => {
                  console.log(err)
                  this.err = err.message;
              });
  }

  ngOnInit() {
  }
  onSubmit() {
  }

}
