import { Component } from '@angular/core';
import { CardsComponent } from "../components/cards/cards.component";

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

}
