import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDBComponent } from './test-db.component';

describe('TestDBComponent', () => {
  let component: TestDBComponent;
  let fixture: ComponentFixture<TestDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
