// Definiamo come è fatto un Libro
export interface Libro {
  id?: number;
  titolo: string;
  autore: string;
  genere: string;
  is_disponibile: boolean;
}

// Definiamo l'Utente
export interface Utente {
  id?: number;
  nome: string;
  email: string;
}

// Il Prestito collega un Libro a un Utente
export interface Prestito {
  id?: number;
  id_libro: number;
  id_utente: number;
  data_inizio: string;
  data_fine?: string;
}