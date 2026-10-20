import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio03 } from './ejercicio03';

describe('Ejercicio03', () => {
  let component: Ejercicio03;
  let fixture: ComponentFixture<Ejercicio03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio03],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
