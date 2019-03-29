import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupHeroComponent } from './signup-hero.component';

describe('SignupHeroComponent', () => {
  let component: SignupHeroComponent;
  let fixture: ComponentFixture<SignupHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
