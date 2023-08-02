import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductosAlcolicosService {
  constructor(private http: HttpClient) {}

  BASEURLALCOHOLIC =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
  BASEURLNOTALCOHOLIC =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  getData() {
    return this.http.get(this.BASEURLALCOHOLIC);
  }
}
