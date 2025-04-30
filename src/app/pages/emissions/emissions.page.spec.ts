import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmissionsPage } from './emissions.page';

describe('EmissionsPage', () => {
  let component: EmissionsPage;
  let fixture: ComponentFixture<EmissionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
