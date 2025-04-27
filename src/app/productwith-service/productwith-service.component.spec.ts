import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductwithSErviceComponent } from './productwith-service.component';

describe('ProductwithSErviceComponent', () => {
  let component: ProductwithSErviceComponent;
  let fixture: ComponentFixture<ProductwithSErviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductwithSErviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductwithSErviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
