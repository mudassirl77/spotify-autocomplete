import { Component, Input } from '@angular/core';

@Component({
  selector: 'spotify-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {
  public isHover: boolean = false;

  @Input() public iconClass: string = '';
  @Input() public anchorClass: string = 'text-decoration-none';
  @Input() public link: string = '#';
  @Input() public tooltip: string = '';
  @Input() public color: string = 'darkslategrey';
  @Input() public colorHovered: string = 'black';
  @Input() public text: string = '';
}
