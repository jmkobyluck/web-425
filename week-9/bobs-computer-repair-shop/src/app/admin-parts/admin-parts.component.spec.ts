import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartsComponent } from './admin-parts.component';

describe('AdminPartsComponent', () => {
  let component: AdminPartsComponent;
  let fixture: ComponentFixture<AdminPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
