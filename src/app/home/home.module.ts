import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductosAlcolicosService } from './component/productos-alcolicos/services/productos-alcolicos.service';
import { ProductosAlcolicosModule } from './component/productos-alcolicos';
import { ResultadoModule } from './component/buscador/resultado/resultado.module';



@NgModule({
  providers: [ProductosAlcolicosService],
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ProductosAlcolicosModule, ResultadoModule],
  exports: [HomeComponent],
})
export class HomeModule {}
