import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQRCodesComponent } from './read-qr-codes.component';

describe('ReadQRCodesComponent', () => {
  let component: ReadQRCodesComponent;
  let fixture: ComponentFixture<ReadQRCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadQRCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadQRCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
