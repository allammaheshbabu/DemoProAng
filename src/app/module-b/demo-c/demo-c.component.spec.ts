import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCComponent } from './demo-c.component';

describe('DemoCComponent', () => {
  let component: DemoCComponent;
  let fixture: ComponentFixture<DemoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
