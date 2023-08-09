import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryItemComponent } from './gallery-item.component';

describe('GalleryItemComponent', () => {
  let component: GalleryItemComponent;
  let fixture: ComponentFixture<GalleryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryItemComponent]
    });
    fixture = TestBed.createComponent(GalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
