import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio05 } from './ejercicio05';

describe('Ejercicio05', () => {
  let component: Ejercicio05;
  let fixture: ComponentFixture<Ejercicio05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio05],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio05);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
