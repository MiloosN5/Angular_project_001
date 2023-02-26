import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseLoginMessageComponent } from './please-login-message.component';

describe('PleaseLoginMessageComponent', () => {
  let component: PleaseLoginMessageComponent;
  let fixture: ComponentFixture<PleaseLoginMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PleaseLoginMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PleaseLoginMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
