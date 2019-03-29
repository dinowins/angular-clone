import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionCasterComponent } from './region-caster.component';

describe('RegionCasterComponent', () => {
  let component: RegionCasterComponent;
  let fixture: ComponentFixture<RegionCasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionCasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionCasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
