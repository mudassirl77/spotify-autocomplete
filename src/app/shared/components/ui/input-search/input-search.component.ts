import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'spotify-input-search',
  templateUrl: './input-search.component.html'
})
export class InputSearchComponent {
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() class: string = '';

  @Output() inputChanged: EventEmitter<string | null> = new EventEmitter<string | null>();

  public onInputChanged(value: string | null) {
    this.inputChanged.emit(value);
  }
}
