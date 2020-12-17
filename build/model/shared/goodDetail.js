"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodDetail = void 0;
const goodSummary_1 = require("./goodSummary");
class GoodDetail extends goodSummary_1.GoodSummary {
    constructor(data, goodImages) {
        super(data);
        this.price = data.price;
        this.name = data.name;
        this.currency = data.currency;
        this.img = goodImages;
    }
}
exports.GoodDetail = GoodDetail;
