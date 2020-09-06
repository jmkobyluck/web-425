import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPartsComponent } from './shop-parts.component';

describe('ShopPartsComponent', () => {
  let component: ShopPartsComponent;
  let fixture: ComponentFixture<ShopPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
