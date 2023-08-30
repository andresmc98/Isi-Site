import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaCurricularInteractivoComponent } from './mapa-curricular-interactivo.component';

describe('MapaCurricularInteractivoComponent', () => {
  let component: MapaCurricularInteractivoComponent;
  let fixture: ComponentFixture<MapaCurricularInteractivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaCurricularInteractivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaCurricularInteractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
