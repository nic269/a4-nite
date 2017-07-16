import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../interfaces';
import { CardListServices } from '../../services';

@Component({
  selector: 'card-list',
  template: `
    <div class="card-list b-layout">
      <div
        *ngFor="let card of cardList"
        class="layout-left card-item"
        (click)="detail(card.id)"
      >
        <div class="card-item__wrapper">
          <p class="street">
            {{ card.street }}
          </p>
          <div class="location">
            <span class="zip-code">
              {{ card.zip }}, 
            </span>
            <span class="city">
              {{ card.city }}
            </span>
          </div>
          <p class="">
            <span class="card.type">
              {{ card.type }}, 
            </span>
            <span class="price">
              {{ card.price }}
            </span>
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrls: [ './card-list.component.scss' ],
  providers: [CardListServices]
})
export class CardListComponent implements OnInit {
  private cardList: Card[] = [];

  constructor(
    private _cardListService: CardListServices,
    private _router: Router
  ) { }

  public ngOnInit() {
    this.cardList = this._cardListService.getAll();
  }

  public detail(id) {
    this._router.navigate([`./cards/${id}`]);
  }
}
