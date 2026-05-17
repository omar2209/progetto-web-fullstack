import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BibliotecaService } from '../../services/biblioteca';
import { Utente } from '../../models';

@Component({
  selector: 'app-utenti',
  imports: [FormsModule],
  templateUrl: './utenti.html'
})
export class UtentiComponent {
  nuovoUtente: Utente = {
    nome: '',
    email: ''
  };

  constructor(private biblioService: BibliotecaService) {}

  salvaUtente() {
    if (this.nuovoUtente.nome && this.nuovoUtente.email) {
      this.biblioService.aggiungiUtente({...this.nuovoUtente});
      // Resettiamo il form dopo il salvataggio
      this.nuovoUtente = { nome: '', email: '' };
      alert('Utente registrato con successo!');
    }
  }
}