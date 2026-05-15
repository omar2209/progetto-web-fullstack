import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prestiti } from './prestiti';

describe('Prestiti', () => {
  let component: Prestiti;
  let fixture: ComponentFixture<Prestiti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prestiti],
    }).compileComponents();

    fixture = TestBed.createComponent(Prestiti);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
