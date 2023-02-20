import { Component, Input } from '@angular/core';

@Component({
  selector: 'spotify-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss']
})
export class CardIconComponent {
  public isHover: boolean = false;

  @Input() public iconClass: string = '';
  @Input() public link: string = '';
  @Input() public tooltip: string = '';
}
