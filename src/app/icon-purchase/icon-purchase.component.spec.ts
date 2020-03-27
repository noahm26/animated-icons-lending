import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPurchaseComponent } from './icon-purchase.component';

describe('IconPurchaseComponent', () => {
  let component: IconPurchaseComponent;
  let fixture: ComponentFixture<IconPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
