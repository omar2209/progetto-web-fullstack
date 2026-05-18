import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BibliotecaService } from '../../services/biblioteca';
import { Libro } from '../../models';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent implements OnInit {
  libri: Libro[] = [];
  testoCercato: string = '';

  constructor(private biblioService: BibliotecaService) {}

  ngOnInit() {
    this.libri = this.biblioService.getLibri();
  }

  get libriFiltrati() {
    return this.libri.filter(l => 
      l.titolo.toLowerCase().includes(this.testoCercato.toLowerCase()) ||
      l.autore.toLowerCase().includes(this.testoCercato.toLowerCase()) ||
      l.genere.toLowerCase().includes(this.testoCercato.toLowerCase())
    );
  }
}