import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDComponent } from './demo-d.component';

describe('DemoDComponent', () => {
  let component: DemoDComponent;
  let fixture: ComponentFixture<DemoDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
