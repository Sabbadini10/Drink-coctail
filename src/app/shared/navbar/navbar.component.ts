import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuOpen = false;
  menuClose = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuClose = !this.menuClose;
  }

}
