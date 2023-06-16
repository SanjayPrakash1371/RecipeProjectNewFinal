import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoComponent } from './favo.component';

describe('FavoComponent', () => {
  let component: FavoComponent;
  let fixture: ComponentFixture<FavoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoComponent]
    });
    fixture = TestBed.createComponent(FavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
