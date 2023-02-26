import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpMessageComponent } from './sign-up-message.component';

describe('SignUpMessageComponent', () => {
  let component: SignUpMessageComponent;
  let fixture: ComponentFixture<SignUpMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
