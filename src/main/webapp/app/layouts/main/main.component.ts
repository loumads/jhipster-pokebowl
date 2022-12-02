import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { Card } from '../../models/card.model';
import { AccountService } from 'app/core/auth/account.service';
import { CreateDurationType } from 'dayjs/esm/plugin/duration';

@Component({
  selector: 'jhi-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private accountService: AccountService, private titleService: Title, private router: Router) {}
  Cards!: Card[];

  ngOnInit(): void {
    // try to log in automatically
    this.accountService.identity().subscribe();
    this.Cards = [
      {
        title: 'Pikachu',
        description: 'Pikachu est un Pokémon Souris de type Électrik apparu dès la première génération.',
        imageUrl: 'https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/800px-Pikachu-DEPS.png',
      },
      {
        title: 'Bulbizarre',
        description:
          'Bulbizarre est un Pokémon de type Plante et Poison de la première génération. C est l un des Pokémon de départ de la région de Kanto.',
        imageUrl: 'https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png?20141212043325',
      },
      {
        title: 'Salamèche',
        description:
          'Salamèche est un Pokémon de type Feu de la première génération. C est l un des Pokémon de départ de la région de Kanto.',
        imageUrl: 'https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/375px-Salam%C3%A8che-RFVF.png',
      },
      {
        title: 'Carapuce',
        description:
          'Carapuce est un Pokémon de type Eau de la première génération. C est l un des Pokémon de départ de la région de Kanto.',
        imageUrl: 'https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/375px-Carapuce-RFVF.png',
      },
    ];
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateTitle();
      }
    });
  }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
    const title: string = routeSnapshot.data['pageTitle'] ?? '';
    if (routeSnapshot.firstChild) {
      return this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  private updateTitle(): void {
    let pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
    if (!pageTitle) {
      pageTitle = 'Pokebowl';
    }
    this.titleService.setTitle(pageTitle);
  }
}
