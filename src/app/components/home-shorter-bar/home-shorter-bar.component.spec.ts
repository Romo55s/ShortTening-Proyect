import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShorterBarComponent } from './home-shorter-bar.component';

describe('HomeShorterBarComponent', () => {
  let component: HomeShorterBarComponent;
  let fixture: ComponentFixture<HomeShorterBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeShorterBarComponent]
    });
    fixture = TestBed.createComponent(HomeShorterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
