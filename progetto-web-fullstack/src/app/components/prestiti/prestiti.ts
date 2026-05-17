import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Libro, Utente } from '../../models';

@Component({
  selector: 'app-prestiti',
  templateUrl: './prestiti.component.html'
})
export class PrestitiComponent implements OnInit {
  libri: Libro[] = [];
  utenti: Utente[] = [];
  
  idLibroSelezionato!: number;
  idUtenteSelezionato!: number;

  constructor(private biblioService: BibliotecaService) {}

  ngOnInit() {
    this.aggiornaDati();
  }

  aggiornaDati() {
    // Prendiamo i libri (per vedere chi è disponibile) e gli utenti
    this.libri = this.biblioService.getLibri();
    this.utenti = this.biblioService.getUtenti();
  }

  registraPrestito() {
    if (this.idLibroSelezionato && this.idUtenteSelezionato) {
      // Chiamiamo la logica del servizio
      const successo = this.biblioService.effettuaPrestito(Number(this.idLibroSelezionato), Number(this.idUtenteSelezionato));
      
      if (successo) {
        alert('Prestito registrato con successo! Lo stato del libro è cambiato.');
        // Resettiamo il form
        this.idLibroSelezionato = undefined;
        this.idUtenteSelezionato = undefined;
        this.aggiornaDati();
      } else {
        alert('Errore: Il libro è già in prestito o non trovato!');
      }
    }
  }
}