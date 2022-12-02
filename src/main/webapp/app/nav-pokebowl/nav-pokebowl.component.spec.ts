import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPokebowlComponent } from './nav-pokebowl.component';

describe('NavPokebowlComponent', () => {
  let component: NavPokebowlComponent;
  let fixture: ComponentFixture<NavPokebowlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavPokebowlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavPokebowlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
