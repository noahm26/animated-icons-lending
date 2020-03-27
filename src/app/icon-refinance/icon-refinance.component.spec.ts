import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRefinanceComponent } from './icon-refinance.component';

describe('IconRefinanceComponent', () => {
  let component: IconRefinanceComponent;
  let fixture: ComponentFixture<IconRefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconRefinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
