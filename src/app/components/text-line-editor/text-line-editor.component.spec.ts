import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLineEditorComponent } from './text-line-editor.component';

describe('TextLineEditorComponent', () => {
  let component: TextLineEditorComponent;
  let fixture: ComponentFixture<TextLineEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextLineEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLineEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
