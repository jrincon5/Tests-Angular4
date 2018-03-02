import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { async } from '@angular/core/testing';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    }).compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    comp = fixture.componentInstance;
  });

  it('El primer test component', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title); //el (Componente HTML) - comp (Componente TS)
  });

  it('Cambiar el titulo', () =>{
    comp.title = 'Este es el segundo titulo';
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

});
