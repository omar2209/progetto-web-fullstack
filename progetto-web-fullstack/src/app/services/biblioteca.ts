import { Injectable } from '@angular/core';
import { Libro, Utente, Prestito } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private libri: Libro[] = [
    { id: 1, titolo: 'Il Nome della Rosa', autore: 'Umberto Eco', genere: 'Storico', is_disponibile: true, copertina: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400' },
    { id: 2, titolo: '1984', autore: 'George Orwell', genere: 'Dystopia', is_disponibile: false, copertina: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400' },
    { id: 3, titolo: 'Dune', autore: 'Frank Herbert', genere: 'Sci-Fi', is_disponibile: true, copertina: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400' },
    { id: 4, titolo: 'Il Signore degli Anelli', autore: 'J.R.R. Tolkien', genere: 'Fantasy', is_disponibile: true, copertina: 'https://images.unsplash.com/photo-1618666012174-83b441c0bc76?w=400' },
    { id: 5, titolo: 'Il Grande Gatsby', autore: 'F. Scott Fitzgerald', genere: 'Classico', is_disponibile: true, copertina: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400' },
    { id: 6, titolo: 'Cronache del Ghiaccio e del Fuoco', autore: 'G.R.R. Martin', genere: 'Fantasy', is_disponibile: true, copertina: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400' },
    { id: 7, titolo: 'Lo Hobbit', autore: 'J.R.R. Tolkien', genere: 'Fantasy', is_disponibile: true, copertina: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400' },
    { id: 8, titolo: 'Fahrenheit 451', autore: 'Ray Bradbury', genere: 'Sci-Fi', is_disponibile: true, copertina: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400' },
    { id: 9, titolo: 'Neuromante', autore: 'William Gibson', genere: 'Cyberpunk', is_disponibile: true, copertina: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400' },
    { id: 10, titolo: 'Fondazione', autore: 'Isaac Asimov', genere: 'Sci-Fi', is_disponibile: true, copertina: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400' },
    { id: 11, titolo: 'L\'Ombra del Vento', autore: 'Carlos Ruiz Zafón', genere: 'Mistero', is_disponibile: true, copertina: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=400' },
    { id: 12, titolo: 'Orgoglio e Pregiudizio', autore: 'Jane Austen', genere: 'Romantico', is_disponibile: true, copertina: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400' }
  ];

  private utenti: Utente[] = [
    { id: 1, nome: 'Mario Rossi', email: 'mario@rossi.it' },
    { id: 2, nome: 'Sofia Bianchi', email: 'sofia@bianchi.it' }
  ];

  private prestiti: Prestito[] = [
    { id: 1, id_libro: 2, id_utente: 1, data_inizio: '2026-05-15' }
  ];

  getLibri() { return this.libri; }
  getUtenti() { return this.utenti; }
  getPrestiti() { return this.prestiti; }

  aggiungiUtente(nuovoUtente: Utente) {
    nuovoUtente.id = this.utenti.length + 1;
    this.utenti.push(nuovoUtente);
  }

  effettuaPrestito(idLibro: number, idUtente: number): boolean {
    const libro = this.libri.find(l => l.id === idLibro);
    if (libro && libro.is_disponibile) {
      libro.is_disponibile = false;
      const nuovoPrestito: Prestito = {
        id: this.prestiti.length + 1,
        id_libro: idLibro,
        id_utente: idUtente,
        data_inizio: new Date().toISOString().split('T')[0]
      };
      this.prestiti.push(nuovoPrestito);
      return true;
    }
    return false;
  }

  restituisciLibro(idLibro: number) {
    const libro = this.libri.find(l => l.id === idLibro);
    if (libro) {
      libro.is_disponibile = true;
      this.prestiti = this.prestiti.filter(p => p.id_libro !== idLibro);
    }
  }
}