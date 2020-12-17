export class GoodSummary {
  goodId: string;
  name: string;
  price: number;
  currency: string;
  img: string[];
  time: Date = new Date()

  constructor(data: any) {
    this.goodId = data.goodId;
    this.name = data.name;
    this.price = data.price;
    this.currency = data.currency;
    this.img = data.img;
  }
}
