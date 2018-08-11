import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackPagesComponent } from './attack-pages.component';

describe('AttackPagesComponent', () => {
  let component: AttackPagesComponent;
  let fixture: ComponentFixture<AttackPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
