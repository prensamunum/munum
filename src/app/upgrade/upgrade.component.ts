import {Component, OnInit} from '@angular/core';
import {utils, write, WorkBook} from 'xlsx';
import {saveAs} from 'file-saver';
import swal from 'sweetalert2';

import {DelegateService} from '../services/delegate/delegate.service';
import {DelegationService} from '../services/delegation/delegation.service';
import {StaffService} from '../services/staff/staff.service';

@Component({
    selector: 'app-upgrade',
    templateUrl: './upgrade.component.html',
    styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {
    title = 'app';

    constructor(private delegateService: DelegateService, private delegationService: DelegationService, private staffService: StaffService) {
    }

    ngOnInit() {
    }

    xlsx(json: any, nombre: string): any {
        const ws_name = 'SomeSheet';
        const wb: WorkBook = {SheetNames: [], Sheets: {}};
        const ws: any = utils.json_to_sheet(json);
        wb.SheetNames.push(ws_name);
        wb.Sheets[ws_name] = ws;
        const wbout = write(wb, {bookType: 'xlsx', bookSST: true, type: 'binary'});

        function s2ab(s) {
            const buf = new ArrayBuffer(s.length);
            const view = new Uint8Array(buf);
            for (let i = 0; i !== s.length; ++i) {
                view[i] = s.charCodeAt(i) & 0xFF;
            }
            ;
            return buf;
        }
        const fileName: string = nombre + '.xlsx';
        saveAs(new Blob([s2ab(wbout)], {type: 'application/octet-stream'}), fileName);
    };


    delegados() {
        this.delegateService.getDelegates()
            .subscribe(
                delegatesRes => {
                    this.xlsx(delegatesRes, 'delegados');
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

    instituciones() {
        this.delegationService.getDelegations()
            .subscribe(
                delegationRes => {
                    this.xlsx(delegationRes, 'instituciones');
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

    staff() {
        this.staffService.getStaff()
            .subscribe(
                delegationRes => {
                    this.xlsx(delegationRes, 'staff');
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
