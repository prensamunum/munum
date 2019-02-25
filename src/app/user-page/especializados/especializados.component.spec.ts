import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializadosComponent } from './especializados.component';

describe('EspecializadosComponent', () => {
  let component: EspecializadosComponent;
  let fixture: ComponentFixture<EspecializadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecializadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
