import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spotify-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  public isAudioPlaying: boolean = false;

  @Input() public type: string = '';
  @Input() public title: string = '';
  @Input() public imageUrl: string = '';
  @Input() public previewUrl?: string;
  @Input() private spotifyExternalUrl?: string;

  private audio!: HTMLAudioElement;

  public ngOnInit(): void {
    if (this.previewUrl) {
      this.audio = new Audio();
      this.audio.src = this.previewUrl;
    }
  }

  public playAudio(event: PointerEvent): void {
    event.preventDefault();
    this.audio.play();
    this.isAudioPlaying = true;
    this.audio.onended = () => this.isAudioPlaying = false;
  }

  public pauseAudio(event: PointerEvent): void {
    event.preventDefault();
    this.audio.pause();
    this.isAudioPlaying = false;
  }

  public goToSpotify(event: PointerEvent): void {
    event.preventDefault();
    if (this.spotifyExternalUrl) {
      window.open(this.spotifyExternalUrl, '_blank');
    }
  }
}
