import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlimpiadsComponent } from './olimpiads.component';

describe('OlimpiadsComponent', () => {
  let component: OlimpiadsComponent;
  let fixture: ComponentFixture<OlimpiadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlimpiadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlimpiadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
