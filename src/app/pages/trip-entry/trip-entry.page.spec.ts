import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripEntryPage } from './trip-entry.page';

describe('TripEntryPage', () => {
  let component: TripEntryPage;
  let fixture: ComponentFixture<TripEntryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TripEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
