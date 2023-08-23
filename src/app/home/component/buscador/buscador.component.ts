import { Component, OnInit } from '@angular/core';
import { BuscadorService } from './service/buscador.service';
import { ResultadoService } from './resultado/service/resultado.service';
import { Subscription } from 'rxjs';





@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent {
  constructor(
    private buscadorService: BuscadorService,
    private resultadoService: ResultadoService
  ) {}

  _data: any[] = [];
  strDrink: string = '';
  strDrinkThumb: string = '';
  name: string = '';
  strIngredient: string = '';
  strDescription: string = '';
  strABV: any;
  showSearchResults: boolean = false;


  searchCoctailName() {
    this.buscadorService.searchByCoctailName(this.name).subscribe(
      (res: any) => {
        this.resultadoService.updateResults(res.drinks);
        this.showSearchResults = true;
        console.log(res.drinks); // Verificar los resultados en el servicio
      },
      (error: any) => {
        console.error('Error en la búsqueda:', error);
      }
    ) as Subscription;
  }
}


