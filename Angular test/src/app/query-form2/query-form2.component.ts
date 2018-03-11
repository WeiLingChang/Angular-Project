
import { Component, OnInit } from '@angular/core';


import { QueryCriteria } from './../model/query-criteria';
import { Theme } from './../model/theme';


@Component({
  selector: 'app-query-form2',
  templateUrl: './query-form2.component.html',
  styleUrls: ['./query-form2.component.css']
})
export class QueryForm2Component implements OnInit {
  criteria: QueryCriteria
  constructor() { }
  /* standing data goes here*/
  public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ];
  public roles = [
    { value: 'admin', display: 'Administrator' },
    { value: 'guest', display: 'Guest' },
    { value: 'custom', display: 'Custom' }
  ];
  public themes: Theme[] = [
    { backgroundColor: 'black', fontColor: 'white', display: 'Dark' },
    { backgroundColor: 'white', fontColor: 'black', display: 'Light' },
    { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
  ];
  public topics = [
    { value: 'game', display: 'Gaming' },
    { value: 'tech', display: 'Technology' },
    { value: 'life', display: 'Lifestyle' },
  ];
  public toggles = [
    { value: 'toggled', display: 'Toggled' },
    { value: 'untoggled', display: 'UnToggled' },
  ];
  /* end standing data */


  ngOnInit() {
    this.criteria = new QueryCriteria(
      'Angel',
      28,
      this.genders[1].value, // default to Female
      null,
      this.themes[0], // default to dark theme
      false,
      [this.topics[1].value], // default to Technology;
      [this.toggles[1].value], // default to untoggled

    )
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

}
