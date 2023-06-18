import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReciepeComponent } from './delete-reciepe.component';

describe('DeleteReciepeComponent', () => {
  let component: DeleteReciepeComponent;
  let fixture: ComponentFixture<DeleteReciepeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteReciepeComponent]
    });
    fixture = TestBed.createComponent(DeleteReciepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
