import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquilinosComponent } from './inquilinos.component';

describe('InquilinosComponent', () => {
  let component: InquilinosComponent;
  let fixture: ComponentFixture<InquilinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquilinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquilinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
