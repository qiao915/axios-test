"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCreateData = void 0;
const data_1 = require("../../data/data");
const uuid_1 = require("uuid");
const msg_1 = require("../../model/shared/msg");
exports.apiCreateData = (req, res, next) => {
    const requireFilds = ["name", "price"]; // name price 必传
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requireFilds.every(field => givenFields.includes(field)))
        return next(new msg_1.ApiError("缺少参数", 400));
    const newGood = {
        goodId: uuid_1.v4(),
        name: req.body.name,
        price: req.body.price,
        currency: req.body.currency || "RMB",
        img: req.body.img || []
    };
    data_1.DataStore.goods.push(newGood);
    res.json(new msg_1.ApiSuccess("数据添加成功", 200, newGood));
};
