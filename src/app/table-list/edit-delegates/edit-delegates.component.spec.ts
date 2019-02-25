import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDelegatesComponent } from './edit-delegates.component';

describe('EditDelegatesComponent', () => {
  let component: EditDelegatesComponent;
  let fixture: ComponentFixture<EditDelegatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDelegatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDelegatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
