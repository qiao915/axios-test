"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDeleteGood = void 0;
const data_1 = require("../../data/data");
const msg_1 = require("../../model/shared/msg");
exports.apiDeleteGood = (req, res) => {
    const goodIndex = data_1.DataStore.goods.findIndex((item) => item.goodId == req.params.id);
    if (goodIndex > -1) {
        data_1.DataStore.goods.splice(goodIndex, 1);
        res.json(new msg_1.ApiSuccess("删除成功！", 200));
    }
    else {
        res.json(new msg_1.ApiError('您删除的数据不存在', 400));
    }
};
