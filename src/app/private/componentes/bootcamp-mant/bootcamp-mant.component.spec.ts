import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampMantComponent } from './bootcamp-mant.component';

describe('BootcampMantComponent', () => {
  let component: BootcampMantComponent;
  let fixture: ComponentFixture<BootcampMantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampMantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
