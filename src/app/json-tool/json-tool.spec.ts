import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTool } from './json-tool';

describe('JsonTool', () => {
  let component: JsonTool;
  let fixture: ComponentFixture<JsonTool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonTool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonTool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
