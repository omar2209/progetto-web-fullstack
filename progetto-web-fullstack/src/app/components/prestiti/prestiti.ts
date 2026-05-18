import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BibliotecaService } from '../../services/biblioteca';
import { Libro, Utente, Prestito } from '../../models';

@Component({
  selector: 'app-prestiti',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prestiti.html',
  styleUrls: ['./prestiti.css']
})
export class PrestitiComponent implements OnInit {
  libri: Libro[] = [];
  utenti: Utente[] = [];
  prestitiAttivi: any[] = [];

  idLibroSelezionato?: number;
  idUtenteSelezionato?: number;

  constructor(private biblioService: BibliotecaService) {}

  ngOnInit() {
    this.aggiornaDati();
  }

  // Funzione helper che restituisce il libro attualmente selezionato
  get libroSelezionatoCompleto(): Libro | undefined {
    return this.libri.find(l => l.id === Number(this.idLibroSelezionato));
  }

  aggiornaDati() {
    this.libri = this.biblioService.getLibri();
    this.utenti = this.biblioService.getUtenti();
    
    const listaPrestiti: Prestito[] = this.biblioService.getPrestiti();
    this.prestitiAttivi = listaPrestiti.map((p: Prestito) => {
      const libro = this.libri.find(l => l.id === p.id_libro);
      const utente = this.utenti.find(u => u.id === p.id_utente);
      return {
        id_libro: p.id_libro,
        titoloLibro: libro ? libro.titolo : 'Sconosciuto',
        nomeUtente: utente ? utente.nome : 'Sconosciuto',
        dataInizio: p.data_inizio
      };
    });
  }

  registraPrestito() {
    if (this.idLibroSelezionato && this.idUtenteSelezionato) {
      const successo = this.biblioService.effettuaPrestito(Number(this.idLibroSelezionato), Number(this.idUtenteSelezionato));
      if (successo) {
        this.idLibroSelezionato = undefined!;
        this.idUtenteSelezionato = undefined!;
        this.aggiornaDati();
      }
    }
  }

  restituisci(idLibro: number) {
    this.biblioService.restituisciLibro(idLibro);
    this.aggiornaDati();
  }
}