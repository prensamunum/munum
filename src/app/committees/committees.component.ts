import { Component, OnInit } from '@angular/core';
import {DelegateService} from '../services/delegate/delegate.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})

export class CommitteesComponent implements OnInit {

  committee = {
      committees: '',
  };
  delegates = {
      name: '',
      lastNane: '',
      idType: '',
      idNumer: '',
      institution: '',
      code: '',
  };
  constructor(private delegateService: DelegateService) {
  }

  ngOnInit() {
  }

  delegatesByComittee() {
      this.delegateService.delegatesByComittee(this.committee)
          .subscribe(
              delegates => {
                  this.delegates = delegates;
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
