import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) this.length = parsedValue;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    console.log(`
      Includes letters: ${this.includeLetters}
      Includes numbers: ${this.includeNumbers}
      Includes symbols: ${this.includeSymbols}
    `);
    this.password = 'MY PASSWORD!!!';
  }
}
