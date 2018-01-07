import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  birthday = new Date(1991, 2, 1);
  toggle: boolean = true;
  message: String = "";

  constructor() { }

  ngOnInit() {
  }

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  changeFormat(): void {
    this.toggle = !this.toggle;
  }

  enter() {
    this.message = "Mouse enter";
  }

  leave() {
    this.message = "Mouse leave";
  }
}
