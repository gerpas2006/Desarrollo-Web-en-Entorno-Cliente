import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio06 } from './ejercicio06';

describe('Ejercicio06', () => {
  let component: Ejercicio06;
  let fixture: ComponentFixture<Ejercicio06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio06],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio06);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
