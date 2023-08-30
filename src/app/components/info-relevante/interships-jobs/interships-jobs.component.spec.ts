import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipsJobsComponent } from './interships-jobs.component';

describe('IntershipsJobsComponent', () => {
  let component: IntershipsJobsComponent;
  let fixture: ComponentFixture<IntershipsJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntershipsJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntershipsJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
