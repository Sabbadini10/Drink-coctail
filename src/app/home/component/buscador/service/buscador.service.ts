import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadoService } from '../resultado/service/resultado.service';

@Injectable({
  providedIn: 'root',
})
export class BuscadorService {
  constructor(
    private http: HttpClient,
    private resultadoService: ResultadoService
  ) {}

  private BASEURLCOCTAILNAME =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  searchByCoctailName(name: string): Observable<any> {
    let url = `${this.BASEURLCOCTAILNAME}${name}`;
    return this.http.get(url);
  }
}
