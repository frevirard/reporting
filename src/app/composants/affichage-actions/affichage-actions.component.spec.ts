import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageActionsComponent } from './affichage-actions.component';

describe('AffichageActionsComponent', () => {
  let component: AffichageActionsComponent;
  let fixture: ComponentFixture<AffichageActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
