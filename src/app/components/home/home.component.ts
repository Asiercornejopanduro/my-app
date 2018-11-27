import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;
  autor: string;
  constructor() {
    this.title = 'Primera app Angular';
    this.autor = 'Asier Cornejo';
  }
  ngOnInit() {
  }

}
