import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: true,
  imports: [],
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  @Input({ transform: booleanAttribute }) btnDisabled: boolean = false;
  @Output() buttonOutputClick = new EventEmitter<string>();

  onOutputClick() {
    console.log("Cliquei no botão")

    this.buttonOutputClick.emit('Xablau');
  }
}
