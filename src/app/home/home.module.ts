import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductosAlcolicosService } from './component/productos-alcolicos/services/productos-alcolicos.service';
import { ProductosAlcolicosModule } from './component/productos-alcolicos';



@NgModule({
  providers: [ProductosAlcolicosService],
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ProductosAlcolicosModule],
  exports: [HomeComponent],
})
export class HomeModule {}
