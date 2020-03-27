import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconEquityComponent } from './icon-equity.component';

describe('IconEquityComponent', () => {
  let component: IconEquityComponent;
  let fixture: ComponentFixture<IconEquityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconEquityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
