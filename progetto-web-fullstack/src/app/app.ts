import { Component, signal } from '@angular/core';
import { Catalogo } from './components/catalogo/catalogo';

@Component({
  selector: 'app-root',
  imports: [Catalogo],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('progetto-web-fullstack');
}
