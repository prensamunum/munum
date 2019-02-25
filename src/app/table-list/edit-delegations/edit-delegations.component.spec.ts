import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDelegationsComponent } from './edit-delegations.component';

describe('EditDelegationsComponent', () => {
  let component: EditDelegationsComponent;
  let fixture: ComponentFixture<EditDelegationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDelegationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDelegationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
