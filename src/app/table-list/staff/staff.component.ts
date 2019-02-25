import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {StaffService} from '../../services/staff/staff.service';
import swal from 'sweetalert2';


@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
    staff: any[];

    constructor(private staffService: StaffService, public router: Router) {
        this.getStaff();
    }

    ngOnInit() {
    }

    getStaff() {
        this.staffService.getStaff()
            .subscribe(
                staffRes => {
                    this.staff = staffRes;
                },
                err => {
                    swal('Any fool can use a computer');
                });
    }

    delete(id) {
        swal({
            title: '¿Estas seguro?',
            text: 'Deseas eliminarlo',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar',
        })
            .then((result) => {
                if (result.value) {
                    this.staffService.deleteStaff(id)
                        .subscribe(
                            staffRes => {
                                console.log(this.staff);
                                for (let i = 0; i < this.staff.length; i++) {
                                    if (this.staff[i]._id === id) {
                                        this.staff.splice(i, 1);
                                    }
                                }
                            },
                            err => {
                                console.log(err);
                            });
                }
            });
    }

    editView(id) {
        this.router.navigate(['admin/editStaff', id]);
    }

}


