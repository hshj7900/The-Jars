import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  try () {
    this.router.navigateByUrl('/happiness')
  }
  motivate () {
    this.router.navigateByUrl('/motivate')
  }
  sad () {
    this.router.navigateByUrl('/sad')
  }
};
