import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaLibrosComponent } from './vista-libros.component';

describe('VistaLibrosComponent', () => {
  let component: VistaLibrosComponent;
  let fixture: ComponentFixture<VistaLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
