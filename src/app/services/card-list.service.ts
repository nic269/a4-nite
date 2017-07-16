import { Injectable } from '@angular/core';
import { Card } from '../interfaces';

const list = [
  {
    id: 1,
    city: 'Stockholm',
    zip: '114 35',
    street: 'Sturegatan 4',
    price: 15000000,
    monthfee: 2500,
    area: 137,
    balcony: false,
    rooms: 5,
    sold: true,
    type: 'apartment'
  },
  {
    id: 2,
    city: 'Stockholm 1',
    zip: '114 35',
    street: 'Sturegatan 4',
    price: 15000000,
    monthfee: 2500,
    area: 137,
    balcony: false,
    rooms: 5,
    sold: false,
    type: 'apartment'
  },
  {
    id: 3,
    city: 'Stockholm 2',
    zip: '114 35',
    street: 'Sturegatan 4',
    price: 15000000,
    monthfee: 2500,
    area: 137,
    balcony: false,
    rooms: 5,
    sold: true,
    type: 'apartment'
  },
  {
    id: 4,
    city: 'Stockholm',
    zip: '114 35',
    street: 'Sturegatan 4',
    price: 15000000,
    monthfee: 2500,
    area: 137,
    balcony: false,
    rooms: 5,
    sold: false,
    type: 'apartment'
  },
  {
    id: 5,
    city: 'Stockholm 1',
    zip: '114 35',
    street: 'Sturegatan 4',
    price: 15000000,
    monthfee: 2500,
    area: 137,
    balcony: false,
    rooms: 5,
    sold: false,
    type: 'apartment'
  },
  {
    id: 6,
    city: 'Stockholm 2',
    zip: '114 35',
    street: 'Sturegatan 4',
    price: 15000000,
    monthfee: 2500,
    area: 137,
    balcony: false,
    rooms: 5,
    sold: false,
    type: 'apartment'
  },
  {
    id: 7,
    city: 'Stockholm',
    zip: '114 35',
    street: 'Sturegatan 4',
    price: 15000000,
    monthfee: 2500,
    area: 137,
    balcony: false,
    rooms: 5,
    sold: false,
    type: 'apartment'
  },
  {
    id: 8,
    city: 'Stockholm 1',
    zip: '114 35',
    street: 'Sturegatan 4',
    price: 15000000,
    monthfee: 2500,
    area: 137,
    balcony: false,
    rooms: 5,
    sold: false,
    type: 'apartment'
  },
  {
    id: 9,
    city: 'Stockholm 2',
    zip: '114 35',
    street: 'Sturegatan 4',
    price: 15000000,
    monthfee: 2500,
    area: 137,
    balcony: false,
    rooms: 5,
    sold: true,
    type: 'apartment'
  },
  {
    id: 10,
    city: 'Stockholm',
    zip: '114 35',
    street: 'Sturegatan 4',
    price: 15000000,
    monthfee: 2500,
    area: 137,
    balcony: false,
    rooms: 5,
    sold: true,
    type: 'apartment'
  },
  {
    id: 11,
    city: 'Stockholm 1',
    zip: '114 35',
    street: 'Sturegatan 4',
    price: 15000000,
    monthfee: 2500,
    area: 137,
    balcony: false,
    rooms: 5,
    sold: false,
    type: 'apartment'
  },
  {
    id: 12,
    city: 'Stockholm 2',
    zip: '114 35',
    street: 'Sturegatan 4',
    price: 15000000,
    monthfee: 2500,
    area: 137,
    balcony: false,
    rooms: 5,
    sold: true,
    type: 'apartment'
  }
];

@Injectable()
export class CardListServices {
  public getAll(): Card[] {
    return list;
  }

  public get(id): Card {
    return list.find((item) => item.id === id);
  }
}
