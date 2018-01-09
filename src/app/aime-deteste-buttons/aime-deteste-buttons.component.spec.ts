import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AimeDetesteButtonsComponent } from './aime-deteste-buttons.component';

describe('AimeDetesteButtonsComponent', () => {
  let component: AimeDetesteButtonsComponent;
  let fixture: ComponentFixture<AimeDetesteButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimeDetesteButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AimeDetesteButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
