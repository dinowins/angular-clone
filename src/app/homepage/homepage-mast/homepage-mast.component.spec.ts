import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMastComponent } from './homepage-mast.component';

describe('HomepageMastComponent', () => {
  let component: HomepageMastComponent;
  let fixture: ComponentFixture<HomepageMastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageMastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
