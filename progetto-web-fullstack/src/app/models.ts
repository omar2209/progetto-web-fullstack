export interface Libro {
  id?: number;
  titolo: string;
  autore: string;
  genere: string;
  is_disponibile: boolean;
  copertina?: string; // Nuova proprietà opzionale
}

export interface Utente {
  id?: number;
  nome: string;
  email: string;
}

export interface Prestito {
  id?: number;
  id_libro: number;
  id_utente: number;
  data_inizio: string;
}