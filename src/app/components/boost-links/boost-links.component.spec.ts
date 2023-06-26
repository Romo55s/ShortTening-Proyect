import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostLinksComponent } from './boost-links.component';

describe('BoostLinksComponent', () => {
  let component: BoostLinksComponent;
  let fixture: ComponentFixture<BoostLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoostLinksComponent]
    });
    fixture = TestBed.createComponent(BoostLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
