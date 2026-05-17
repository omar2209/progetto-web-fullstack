import { Component, signal } from '@angular/core';
import { Catalogo } from './components/catalogo/catalogo';
import { UtentiComponent } from './components/utenti/utenti';

@Component({
  selector: 'app-root',
  imports: [Catalogo, UtentiComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('progetto-web-fullstack');
}
