import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNAvComponent } from './second-nav.component';

describe('SecondNAvComponent', () => {
  let component: SecondNAvComponent;
  let fixture: ComponentFixture<SecondNAvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondNAvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondNAvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
