import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUniComponent } from './info-uni.component';

describe('InfoUniComponent', () => {
  let component: InfoUniComponent;
  let fixture: ComponentFixture<InfoUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
