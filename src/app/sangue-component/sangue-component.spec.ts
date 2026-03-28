import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangueComponent } from './sangue-component';

describe('SangueComponent', () => {
  let component: SangueComponent;
  let fixture: ComponentFixture<SangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SangueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SangueComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
