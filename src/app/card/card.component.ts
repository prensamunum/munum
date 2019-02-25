import { Component, OnInit } from '@angular/core';
import {DelegateService} from '../services/delegate/delegate.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    delegate = {
        id: '',
        name: '',
        lastName: '',
        idNumber: '',
        idType: ''
    }
    card: boolean;

  constructor(private delegateService: DelegateService) {
      this.card =  false;
  }

  ngOnInit() {
  }

  onSubmit() {
      this.delegateService.findOneDelegate(this.delegate)
          .subscribe(
              delegateRes => {
                  console.log(delegateRes);
                  this.delegate = delegateRes;
                  this.card = true;
              },
              err => {
                  swal({
                      type: 'error',
                      title: 'Oops...',
                      text: err.json().message,
                      confirmButtonColor: '#d33',
                  });
              }
          );
  }
  regresar() {
      this.card = !this.card;
  }

}
