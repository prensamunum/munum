import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffRegistryComponent } from './staff-registry.component';

describe('StaffRegistryComponent', () => {
  let component: StaffRegistryComponent;
  let fixture: ComponentFixture<StaffRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
