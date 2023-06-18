import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreciepeComponent } from './editreciepe.component';

describe('EditreciepeComponent', () => {
  let component: EditreciepeComponent;
  let fixture: ComponentFixture<EditreciepeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditreciepeComponent]
    });
    fixture = TestBed.createComponent(EditreciepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
