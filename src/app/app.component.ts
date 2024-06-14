import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CardRoxoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  inputValue = "Digite Aqui!";
  inputType = "text";
  inputDisabled = false;
  textBtnDisabled: "Desabilitar" | "Habilitar" = "Desabilitar";

  textAttrTitle = "Apenas Test!";
  attrDisabledBtn = true;

  testBackground = 'red';
  textPxPadding = '10';

  valueClassBtn: 'red' | 'green' = 'green';

  cardPlanType = 'Simples';
  cardPlanPrice = 110;

  updateDisabledBtn(): void {
    this.inputDisabled = !this.inputDisabled;

    if (this.inputDisabled) {
      this.textBtnDisabled = "Habilitar";
    } else {
      this.textBtnDisabled = "Desabilitar";
    };
  };

  typePassword(): void {
    this.inputType = "password"
  };

  typeText(): void {
    this.inputType = "text"
  };

  getTextInput(event: Event) {
    const element = event.target as HTMLInputElement;
    console.log(element.value)
  };

  handleDisabledBtnAttr() {
    this.attrDisabledBtn = !this.attrDisabledBtn;
  };

  classBtn(): string {
    return `${this.valueClassBtn}-button`;
  };

  updateClassBtn(): void {
    this.valueClassBtn = this.valueClassBtn === 'green' ? 'red' : 'green';
  };

  handlePlanType(meuInput: string) {
    this.cardPlanType = meuInput;
  }
}
