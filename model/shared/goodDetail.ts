import { GoodSummary } from './goodSummary'

export class GoodDetail extends GoodSummary {
  price: number;
  currency: string;
  name: string;
  img: string[];
  constructor(data: any, goodImages: string[]) {
    super(data);
    this.price = data.price;
    this.name = data.name;
    this.currency = data.currency
    this.img = goodImages
  }
}