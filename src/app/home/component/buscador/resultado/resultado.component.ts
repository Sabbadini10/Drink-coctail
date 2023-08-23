import { Component, OnInit} from '@angular/core';
import { ResultadoService } from './service/resultado.service';



@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit{
  constructor(private resultadoService: ResultadoService) {}

  _data: any[] = [];
  name: string = '';
  strDrink: string = '';
  strCategory: string = '';
  strAlcoholic: string = '';
  searchResults: any[] = [];

  ngOnInit() {
    this.resultadoService.results$.subscribe((results) => {
      this.searchResults = results;
       console.log(results);
    });
  }
}
