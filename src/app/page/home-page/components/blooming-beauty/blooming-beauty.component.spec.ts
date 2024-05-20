import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloomingBeautyComponent } from './blooming-beauty.component';

describe('BloomingBeautyComponent', () => {
  let component: BloomingBeautyComponent;
  let fixture: ComponentFixture<BloomingBeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloomingBeautyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloomingBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
