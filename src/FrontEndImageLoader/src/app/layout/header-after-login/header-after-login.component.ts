import { Component, OnInit } from '@angular/core';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-header-after-login',
  templateUrl: './header-after-login.component.html',
  styleUrls: ['./header-after-login.component.css']
})
export class HeaderAfterLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
