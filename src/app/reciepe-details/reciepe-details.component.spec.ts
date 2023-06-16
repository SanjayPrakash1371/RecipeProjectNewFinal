import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepeDetailsComponent } from './reciepe-details.component';

describe('ReciepeDetailsComponent', () => {
  let component: ReciepeDetailsComponent;
  let fixture: ComponentFixture<ReciepeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReciepeDetailsComponent]
    });
    fixture = TestBed.createComponent(ReciepeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
