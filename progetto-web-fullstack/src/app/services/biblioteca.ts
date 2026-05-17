import { Injectable } from '@angular/core';
import { Libro, Utente, Prestito } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private libri: Libro[] = [
    { id: 1, titolo: 'Il Nome della Rosa', autore: 'Umberto Eco', genere: 'Storico', is_disponibile: true },
    { id: 2, titolo: '1984', autore: 'George Orwell', genere: 'Dystopia', is_disponibile: false },
    { id: 3, titolo: 'Dune', autore: 'Frank Herbert', genere: 'Sci-Fi', is_disponibile: true }
  ];

  private utenti: Utente[] = [
    { id: 1, nome: 'Mario Rossi', email: 'mario@rossi.it' },
    { id: 2, nome: 'Sofia Bianchi', email: 'sofia@bianchi.it' }
  ];

  // Lista dei prestiti attivi (Iniziamo con 1984 già prestato)
  private prestiti: Prestito[] = [
    { id: 1, id_libro: 2, id_utente: 1, data_inizio: '2026-05-15' }
  ];

  getLibri() { return this.libri; }
  getUtenti() { return this.utenti; }
  getPrestiti() { return this.prestiti; }

  // LOGICA DI BUSINESS: Controlla e crea il prestito
  effettuaPrestito(idLibro: number, idUtente: number): boolean {
    const libro = this.libri.find(l => l.id === idLibro);
    
    // Controllo se il libro è disponibile
    if (libro && libro.is_disponibile) {
      // 1. Cambia lo stato del libro in automatico!
      libro.is_disponibile = false;
      
      // 2. Registra il prestito
      const nuovoPrestito: Prestito = {
        id: this.prestiti.length + 1,
        id_libro: idLibro,
        id_utente: idUtente,
        data_inizio: new Date().toISOString().split('T')[0] // Data di oggi
      };
      this.prestiti.push(nuovoPrestito);
      return true; // Prestito riuscito
    }
    return false; // Libro occupato o non trovato
  }
}