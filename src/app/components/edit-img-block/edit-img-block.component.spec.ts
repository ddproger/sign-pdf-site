import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImgBlockComponent } from './edit-img-block.component';

describe('EditImgBlockComponent', () => {
  let component: EditImgBlockComponent;
  let fixture: ComponentFixture<EditImgBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImgBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImgBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
