export class GoodFilter {
  readonly currency: string;
  constructor(data: any) {
    this.currency = data.currency
  }
}