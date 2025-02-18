import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  nome = 'Douglas';

  onChange(text: string) {
    console.log(text);
  }
}
