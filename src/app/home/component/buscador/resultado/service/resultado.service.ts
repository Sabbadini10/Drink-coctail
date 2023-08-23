import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultadoService {
 private _resultsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  public results$: Observable<any[]> = this._resultsSubject.asObservable();

  updateResults(results: any[]) {
    this._resultsSubject.next(results);
  }
}
