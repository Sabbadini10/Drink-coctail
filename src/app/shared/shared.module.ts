import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BuscadorModule } from 'src/app/home';




@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BuscadorModule,
    CommonModule,
    RouterModule,
  ],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
