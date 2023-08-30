import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoYDontComponent } from './do-y-dont.component';

describe('DoYDontComponent', () => {
  let component: DoYDontComponent;
  let fixture: ComponentFixture<DoYDontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoYDontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoYDontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
