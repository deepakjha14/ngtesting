import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEmailInputComponent } from './custom-email-input.component';

describe('CustomEmailInputComponent', () => {
  let component: CustomEmailInputComponent;
  let fixture: ComponentFixture<CustomEmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomEmailInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
