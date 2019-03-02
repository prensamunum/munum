import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {InterconexionComponent} from "./interconexion.component";

describe('InfoComponent', () => {
  let component: InterconexionComponent;
  let fixture: ComponentFixture<InterconexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterconexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterconexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
