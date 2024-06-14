import { Component, Input } from '@angular/core';
import { CardButtonComponent } from '../card-button/card-button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  @Input({ required: true }) planPrice: number = 0;

  // private _planType: string = '';
  // @Input({ required: true }) set planType(value: string) {
  //   this._planType = value.toUpperCase();
  // };

  // get planType(): string {
  //   return this._planType;
  // };

  //ou-------

  @Input({ required: true, transform: (value: string) =>  value.toUpperCase()}) planType: string = '';

  tipo = 'Simples';
  price = 100;

  getFullPrice(): string {
    return `R$ ${this.price},00/mês`;
  };

  eventClickOutput(event: string): void {
    console.log(`Esse nome ${event}, é passado do elemento filho para o elemento pai!`)
  };
}
