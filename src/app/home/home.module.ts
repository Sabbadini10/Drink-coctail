import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductosAlcolicosComponent } from './component/productos-alcolicos/productos-alcolicos.component';


@NgModule({
  declarations: [HomeComponent, ProductosAlcolicosComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
