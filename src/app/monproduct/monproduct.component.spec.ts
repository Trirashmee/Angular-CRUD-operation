import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonproductComponent } from './monproduct.component';

describe('MonproductComponent', () => {
  let component: MonproductComponent;
  let fixture: ComponentFixture<MonproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
