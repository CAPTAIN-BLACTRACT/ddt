import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTool } from './color-tool';

describe('ColorTool', () => {
  let component: ColorTool;
  let fixture: ComponentFixture<ColorTool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorTool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorTool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
