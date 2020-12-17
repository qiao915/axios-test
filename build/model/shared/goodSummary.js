"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodSummary = void 0;
class GoodSummary {
    constructor(data) {
        this.time = new Date();
        this.goodId = data.goodId;
        this.name = data.name;
        this.price = data.price;
        this.currency = data.currency;
        this.img = data.img;
    }
}
exports.GoodSummary = GoodSummary;
