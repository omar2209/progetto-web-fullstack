import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BibliotecaService } from '../../services/biblioteca';
import { Utente } from '../../models';

@Component({
  selector: 'app-utenti',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './utenti.html',
  styleUrls: ['./utenti.css']
})
export class UtentiComponent {
  nuovoUtente: Utente = { nome: '', email: '' };

  constructor(private biblioService: BibliotecaService) {}

  salvaUtente() {
    if (this.nuovoUtente.nome && this.nuovoUtente.email) {
      this.biblioService.aggiungiUtente({...this.nuovoUtente});
      this.nuovoUtente = { nome: '', email: '' };
      alert('Utente registrato con successo!');
    }
  }
}