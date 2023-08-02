import { TestBed } from '@angular/core/testing';

import { ProductosAlcolicosService } from './productos-alcolicos.service';

describe('ProductosAlcolicosService', () => {
  let service: ProductosAlcolicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosAlcolicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
