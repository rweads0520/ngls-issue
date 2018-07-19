import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtLibComponent } from './ext-lib.component';

describe('ExtLibComponent', () => {
  let component: ExtLibComponent;
  let fixture: ComponentFixture<ExtLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
