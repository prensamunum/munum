import {Router, ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {DelegateService} from '../../services/delegate/delegate.service';
import swal from 'sweetalert2';

@Component({
    selector: 'app-edit-delegates',
    templateUrl: './edit-delegates.component.html',
    styleUrls: ['./edit-delegates.component.css']
})
export class EditDelegatesComponent implements OnInit {
    delegate = {
        _id: '',
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
        blood: '',
        insurance: '',
        specialCondition: '',
        contactName: '',
        contactPhone: '',
        numberMun: '',
        committee1: '',
        committee2: '',
        committee3: '',
        finalCommittee: '',
        code: ''
    };
    delegateToFind = {
        id: ''
    };


    constructor(private delegateService: DelegateService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.getStaffParams();
        this.findDelegate();

    }

    ngOnInit() {
    }

    getStaffParams() {
        this.activatedRoute.params.subscribe(params => {
            this.delegateToFind.id = params['id'];
        });
    }

    findDelegate() {
        this.delegateService.findOneDelegate(this.delegateToFind)
            .subscribe(
                staffRes => {
                    this.delegate = staffRes;
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

    committees(option) {
        switch (option) {
            case '1':
                return 'Security council (Doble delegación)';
            case '2':
                return 'Corte Internacional de Justicia (CIJ)';
            case '3':
                return 'Comité de política especial y de descolonización (SPECPOL)';
            case '4':
                return '>Audiencia nacional española: juicio a Pinochet';
            case '5':
                return 'Consejo nacional de seguridad: palacio de justicia 1985';
            case '6':
                return 'Banco Interamericano de Desarrollo (BID) asamblea anual';
            case '7':
                return 'Comisión de DDHH y de los pueblos de la Unión Africana';
            case '8':
                return 'Commonwealth of Nations';
            case '9':
                return 'Foro de cooperación económica Asia – Pacífico (APEC)';
            case '10':
                return 'GAC: Trotsky vs Stalin';
            case '11':
                return 'GAC: Guerra de los 30 años';
            case '12':
                return 'GAU: Guerra de corea';
            case '13':
                return 'Secret Committee';
            default:
                console.log('Contacte con prensa.munum@gmail.com');
        }
    }


    onSubmit() {
        console.log(this.delegate);
        this.delegateService.updateDelegate(this.delegate)
            .subscribe(
                delegate => {
                    this.router.navigate(['admin/delegates']);
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

}
