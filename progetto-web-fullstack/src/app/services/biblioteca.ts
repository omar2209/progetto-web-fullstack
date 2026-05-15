import { Injectable } from '@angular/core';
import { Libro, Utente, Prestito } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  // Dati di esempio (Mock)
  private libri: Libro[] = [
    { id: 1, titolo: 'Il Nome della Rosa', autore: 'Umberto Eco', genere: 'Storico', is_disponibile: true },
    { id: 2, titolo: '1984', autore: 'George Orwell', genere: 'Dystopia', is_disponibile: false }
  ];

  constructor() { }

  getLibri() {
    return this.libri;
  }

  aggiungiLibro(nuovoLibro: Libro) {
    this.libri.push(nuovoLibro);
  }
}