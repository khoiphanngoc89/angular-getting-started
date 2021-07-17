import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductDetailGuard } from './product-detail.guard';

const activedRouteMock = {
  snapshot: {
    url: [{path: ''}],
    params: {id: 1}
  }
}

describe('ProductDetailGuard', () => {
  let guard: ProductDetailGuard;
  const routerSpy = jasmine.createSpyObj<Router>(['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: activedRouteMock },
        { provide: Router, useValue: routerSpy}
      ]
    });
    guard = TestBed.inject(ProductDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
