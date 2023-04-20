import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdMatComponent } from './curd-mat.component';

describe('CurdMatComponent', () => {
  let component: CurdMatComponent;
  let fixture: ComponentFixture<CurdMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdMatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
