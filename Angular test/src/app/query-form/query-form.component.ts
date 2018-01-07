import { Component, OnInit } from '@angular/core';
import { PersonFrom } from '../model/person-from';


@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {
  person=new PersonFrom(1,'WL','03/01/1991',27);
  ages=[18,19,20,21,22,23,24,25,26,27,28,29,30];
  constructor() { }
  submitted = false;
  ngOnInit() {
    
  }

  onSubmit() { this.submitted = true; }
}
