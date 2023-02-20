import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spotify-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  private audio!: HTMLAudioElement;
  public audioPlaying: boolean = false;

  @Input() type: string = '';
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() previewUrl?: string;

  ngOnInit(): void {
    if (this.previewUrl) {
      this.audio = new Audio();
      this.audio.src = this.previewUrl;
    }
  }

  playAudio(event: PointerEvent) {
    event.preventDefault();
    this.audio.play();
    this.audioPlaying = true;
    this.audio.onended = () => this.audioPlaying = false;
  }

  pauseAudio(event: PointerEvent) {
    event.preventDefault();
    this.audio.pause();
    this.audioPlaying = false;
  }
}
