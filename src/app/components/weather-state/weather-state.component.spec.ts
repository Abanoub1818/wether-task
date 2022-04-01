import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherStateComponent } from './weather-state.component';

describe('WeatherStateComponent', () => {
  let component: WeatherStateComponent;
  let fixture: ComponentFixture<WeatherStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
