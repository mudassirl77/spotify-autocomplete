import { Component, Input } from '@angular/core';

@Component({
  selector: 'spotify-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() type: string = '';
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() previewUrl?: string;
}
