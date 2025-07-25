import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Carro } from './carro';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  carros: Carro[] = [];
  textoGrande = false;
  fondoCambiado = false;
  cardColor = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Carro[]>('assets/carros.json').subscribe(
      (data) => {
        this.carros = data;
      }
    );
  }

  toggleTextoGrande() {
    this.textoGrande = !this.textoGrande;
  }

  toggleFondo() {
    this.fondoCambiado = !this.fondoCambiado;
  }

  toggleCardColor() {
    this.cardColor = !this.cardColor;
  }

  asignaClases() {
    return {
      'texto-grande': this.textoGrande,
      'fondo-cambiado': this.fondoCambiado,
      'card-color': this.cardColor
    };
  }
}