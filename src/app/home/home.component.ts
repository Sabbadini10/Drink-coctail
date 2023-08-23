import { Component } from '@angular/core';
import { ResultadoService } from './component/buscador/resultado/service/resultado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showSearchResults:  any[] = []; // Almacena los resultados

  showProductos: boolean = true;
  constructor(private resultadoService: ResultadoService) {}

  ngOnInit() {
     this.resultadoService.results$.subscribe((results) => {
       this.showSearchResults = results;
     });
  }
}
