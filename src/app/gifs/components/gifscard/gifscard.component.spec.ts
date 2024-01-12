import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifscardComponent } from './gifscard.component';

describe('GifscardComponent', () => {
  let component: GifscardComponent;
  let fixture: ComponentFixture<GifscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
