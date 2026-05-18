import { Component, signal } from '@angular/core';
import { CatalogoComponent } from './components/catalogo/catalogo';
import { PrestitiComponent } from './components/prestiti/prestiti';
import { UtentiComponent } from './components/utenti/utenti';

@Component({
  selector: 'app-root',
  imports: [CatalogoComponent, PrestitiComponent, UtentiComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('progetto-web-fullstack');
}
