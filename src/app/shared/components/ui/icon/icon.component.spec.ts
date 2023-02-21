import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct link', () => {
    const link = 'https://example.com/';
    component.link = link;
    fixture.detectChanges();
    const anchor = fixture.nativeElement.querySelector('a');
    expect(anchor.href).toBe(link);
  });

  it('should change the color on hover', () => {
    const icon = fixture.nativeElement.querySelector('i');
    expect(icon.style.color).toBe('darkslategrey');
    icon.dispatchEvent(new Event('mouseover'));
    fixture.detectChanges();
    expect(icon.style.color).toBe('black');
    icon.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(icon.style.color).toBe('darkslategrey');
  });

  it('should set the correct tooltip', () => {
    const tooltip = 'Click me!';
    component.tooltip = tooltip;
    fixture.detectChanges();
    const icon = fixture.nativeElement.querySelector('i');
    expect(icon.title).toBe(tooltip);
  });
});
