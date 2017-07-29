import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomuserComponent } from './customuser.component';

describe('CustomuserComponent', () => {
  let component: CustomuserComponent;
  let fixture: ComponentFixture<CustomuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
