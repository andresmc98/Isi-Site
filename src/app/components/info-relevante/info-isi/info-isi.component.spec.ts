import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIsiComponent } from './info-isi.component';

describe('InfoIsiComponent', () => {
  let component: InfoIsiComponent;
  let fixture: ComponentFixture<InfoIsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoIsiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoIsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
