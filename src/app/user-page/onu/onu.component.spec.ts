import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {OnuComponent} from "./onu.component";

describe('InfoComponent', () => {
  let component: OnuComponent;
  let fixture: ComponentFixture<OnuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
