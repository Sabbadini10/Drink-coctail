import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductosAlcolicosComponent } from './productos-alcolicos.component';

@NgModule({
  declarations: [ProductosAlcolicosComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ProductosAlcolicosComponent],
})
export class ProductosAlcolicosModule {}
