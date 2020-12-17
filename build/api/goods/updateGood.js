"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUpdateGood = void 0;
const data_1 = require("../../data/data");
const msg_1 = require("../../model/shared/msg");
exports.apiUpdateGood = (req, res) => {
    const goodIndex = data_1.DataStore.goods.findIndex((item) => item.goodId == req.params.id);
    const originalGood = data_1.DataStore.goods[goodIndex]; // 取出老数据
    const newGood = {
        goodId: req.params.id,
        name: req.body.name || originalGood.name,
        price: req.body.price || originalGood.price,
        currency: req.body.price || originalGood.currency,
        img: originalGood.img
    };
    if (goodIndex > -1) {
        data_1.DataStore.goods.splice(goodIndex, 1, newGood);
        res.json(new msg_1.ApiSuccess("数据修改成功！", 200, newGood));
    }
    else {
        res.json(new msg_1.ApiError("数据不存在", 400));
    }
};
