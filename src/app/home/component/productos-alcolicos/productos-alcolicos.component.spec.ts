import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAlcolicosComponent } from './productos-alcolicos.component';

describe('ProductosAlcolicosComponent', () => {
  let component: ProductosAlcolicosComponent;
  let fixture: ComponentFixture<ProductosAlcolicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosAlcolicosComponent]
    });
    fixture = TestBed.createComponent(ProductosAlcolicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
