import { Component, OnInit } from '@angular/core';
import { ProductosAlcolicosService } from './services/productos-alcolicos.service';


@Component({
  selector: 'app-productos-alcolicos',
  templateUrl: './productos-alcolicos.component.html',
  styleUrls: ['./productos-alcolicos.component.css'],
})
export class ProductosAlcolicosComponent implements OnInit {
  _data: any[] = [];
  strDrink: string = '';
  strDrinkThumb: string = '';
  constructor(private productosAlcolicosService: ProductosAlcolicosService) {}

  ngOnInit(): void {
    this.productosAlcolicosService.getData().subscribe((res: any) => {
      this._data = res.drinks;
      console.log(res.drinks);
    });
    console.log(this._data);
  }
}
