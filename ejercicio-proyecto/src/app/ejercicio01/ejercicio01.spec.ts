import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio01 } from './ejercicio01';

describe('Ejercicio01', () => {
  let component: Ejercicio01;
  let fixture: ComponentFixture<Ejercicio01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio01],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a personalized greeting', () => {
    component.nombre = 'Ana';
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('¡Hola, Ana!');
  });
});
