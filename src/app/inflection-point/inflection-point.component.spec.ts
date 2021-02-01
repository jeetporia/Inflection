import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflectionPointComponent } from './inflection-point.component';

describe('InflectionPointComponent', () => {
  let component: InflectionPointComponent;
  let fixture: ComponentFixture<InflectionPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InflectionPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflectionPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
