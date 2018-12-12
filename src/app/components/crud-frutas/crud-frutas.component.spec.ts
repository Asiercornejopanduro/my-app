import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFrutasComponent } from './crud-frutas.component';

describe('CrudFrutasComponent', () => {
  let component: CrudFrutasComponent;
  let fixture: ComponentFixture<CrudFrutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudFrutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
