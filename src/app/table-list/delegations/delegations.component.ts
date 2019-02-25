import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {DelegationService} from '../../services/delegation/delegation.service';
import swal from 'sweetalert2';


@Component({
    selector: 'app-delegations',
    templateUrl: './delegations.component.html',
    styleUrls: ['./delegations.component.css']
})
export class DelegationsComponent implements OnInit {
    delegations: any[];

    constructor(private delegationService: DelegationService,  private router: Router) {
        this.delegationService.getDelegations()
            .subscribe(
                delegationRes => {
                    this.delegations = delegationRes;
                },
                err => {
                    console.log(err);
                });
    }

    ngOnInit() {
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
                    this.delegationService.deleteDelegation(id)
                        .subscribe(
                            delegation => {
                                console.log(this.delegations);
                                for (let i = 0; i < this.delegations.length; i++) {
                                    if (this.delegations[i]._id === id) {
                                        this.delegations.splice(i, 1);
                                    }
                                }
                            },
                            err => {
                                console.log(err);
                            });
                }
            });
    }
    delegates(delegation) {
        this.delegationService.delegateByDelegation(delegation)
            .subscribe(
                delegatesRes => {
                    console.log(this.delegations);
                    // for (let i = 0; i < this.delegations.length; i++) {
                    //     if (this.delegations[i]._id === id) {
                    //         this.delegations.splice(i, 1);
                    //     }
                    // }
                    this.delegations = delegatesRes;
                },
                err => {
                    console.log(err);
                });
    }
    editView(id) {
        this.router.navigate(['admin/editDelegations', id]);
    }

}