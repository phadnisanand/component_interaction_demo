import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mother',
  templateUrl: './mother.component.html',
  styleUrls: ['./mother.component.css']
})
export class MotherComponent implements OnInit {
  public userlogin : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
