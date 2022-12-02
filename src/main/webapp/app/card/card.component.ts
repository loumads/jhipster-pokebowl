import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'jhi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  title!: string;
  description!: string;
  imageUrl!: string;

  ngOnInit() {
    this.title = 'Pikachu';
    this.description = 'Petit ecureuil';
    this.imageUrl = 'https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/800px-Pikachu-DEPS.png';
  }
}
