import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio02 } from './ejercicio02';

describe('Ejercicio02', () => {
  let component: Ejercicio02;
  let fixture: ComponentFixture<Ejercicio02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio02],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
