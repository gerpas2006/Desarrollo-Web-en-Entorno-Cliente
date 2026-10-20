import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio04 } from './ejercicio04';

describe('Ejercicio04', () => {
  let component: Ejercicio04;
  let fixture: ComponentFixture<Ejercicio04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio04],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio04);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
