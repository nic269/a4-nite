import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../interfaces';
import { CardListServices } from '../../services';

@Component({
  selector: 'card-detail',
  template: `
    <div class="card-detail" *ngIf="card">
      <div class="card-detail__wrapper">
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
        <p class="status" *ngIf="card.sold">
          SOLD
        </p>
        <p class="status" *ngIf="!card.sold">
          NOT SOLD
        </p>
      </div>
    </div>
  `,
  styleUrls: [ './card-detail.component.scss' ],
  providers: [CardListServices]
})
export class CardDetailComponent implements OnInit, OnDestroy {
  public card: Card;
  private sub: any;

  constructor(
    private _cardListServices: CardListServices,
    private _route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.sub = this._route.params.subscribe((params) => {
      const id = Number.parseInt(params['id']);

      this.card = this._cardListServices.get(id);
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
