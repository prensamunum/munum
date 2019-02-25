import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {DelegateService} from '../../services/delegate/delegate.service';
import swal from 'sweetalert2';


@Component({
    selector: 'app-delegates',
    templateUrl: './delegates.component.html',
    styleUrls: ['./delegates.component.css']
})
export class DelegatesComponent implements OnInit {
    delegates: any[];

    constructor(private delegateService: DelegateService, private router: Router) {
        this.getDelegates();
    }

    ngOnInit() {
    }

    getDelegates() {
        this.delegateService.getDelegates()
            .subscribe(
                delegatesRes => {
                    this.delegates = delegatesRes;
                },
                err => {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: err.json().message,
                        confirmButtonColor: '#d33',
                    });
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
                    this.delegateService.deleteDelegate(id)
                        .subscribe(
                            staffRes => {
                                console.log(this.delegates);
                                for (let i = 0; i < this.delegates.length; i++) {
                                    if (this.delegates[i]._id === id) {
                                        this.delegates.splice(i, 1);
                                    }
                                }
                            },
                            err => {
                                swal({
                                    type: 'error',
                                    title: 'Oops...',
                                    text: err.json().message,
                                    confirmButtonColor: '#d33',
                                });
                            });
                }
            });
    }

    editView(id) {
        console.log('editView')
        this.router.navigate(['admin/editDelegates', id]);
    }
}
