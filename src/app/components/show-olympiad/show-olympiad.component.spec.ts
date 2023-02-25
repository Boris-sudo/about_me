import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOlympiadComponent } from './show-olympiad.component';

describe('ShowOlympiadComponent', () => {
  let component: ShowOlympiadComponent;
  let fixture: ComponentFixture<ShowOlympiadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOlympiadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOlympiadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
