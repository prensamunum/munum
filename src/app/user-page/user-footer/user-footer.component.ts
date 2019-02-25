import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrls: ['./user-footer.component.css', '../land/land.component.css']
})
export class UserFooterComponent implements OnInit {

  constructor() { console.log('help'); }

  ngOnInit() {
  }

}
