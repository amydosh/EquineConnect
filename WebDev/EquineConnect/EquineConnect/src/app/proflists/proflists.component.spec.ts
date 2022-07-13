import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProflistsComponent } from './proflists.component';

describe('ProflistsComponent', () => {
  let component: ProflistsComponent;
  let fixture: ComponentFixture<ProflistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProflistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProflistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
