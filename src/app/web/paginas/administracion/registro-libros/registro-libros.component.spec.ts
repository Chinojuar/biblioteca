import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLibrosComponent } from './registro-libros.component';

describe('RegistroLibrosComponent', () => {
  let component: RegistroLibrosComponent;
  let fixture: ComponentFixture<RegistroLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
