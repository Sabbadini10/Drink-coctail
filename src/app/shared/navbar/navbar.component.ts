import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { BuscadorModule } from 'src/app/home';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, BuscadorModule, CommonModule],
})
export class NavbarComponent {
  menuOpen = false;
  menuClose = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuClose = !this.menuClose;
  }

}
