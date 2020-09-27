import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  public navbarOpen;
  ngOnInit() {}
  public toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  public toggleNavbarLink() {
    this.navbarOpen = !this.navbarOpen;
    window.scrollTo(0, 0);
  }

}
