import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieeeComponent } from './movieee.component';

describe('MovieeeComponent', () => {
  let component: MovieeeComponent;
  let fixture: ComponentFixture<MovieeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
