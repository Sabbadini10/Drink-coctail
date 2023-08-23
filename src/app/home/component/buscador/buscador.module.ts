import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BuscadorComponent } from './buscador.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ResultadoModule } from './resultado/resultado.module';




@NgModule({
  declarations: [BuscadorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    SweetAlert2Module,
    ResultadoModule,
  ],
  exports: [BuscadorComponent],
})
export class BuscadorModule {}
