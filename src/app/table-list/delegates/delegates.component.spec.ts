import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegatesComponent } from './delegates.component';

describe('TableListComponent', () => {
  let component: DelegatesComponent;
  let fixture: ComponentFixture<DelegatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
