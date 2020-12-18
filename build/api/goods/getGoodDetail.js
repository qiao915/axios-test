"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetGoodDetail = void 0;
const data_1 = require("../../data/data");
const goodDetail_1 = require("../../model/shared/goodDetail");
const msg_1 = require("../../model/shared/msg");
exports.apiGetGoodDetail = (req, res) => {
    console.log(req.params.id);
    const selectedGood = data_1.DataStore.goods.find((item) => item.goodId == req.params.id);
    if (selectedGood) {
        const imgURLs = selectedGood.img.map((item) => {
            return item.indexOf("/static") == -1 ? `/static/${item}` : item;
        });
        res.json(new msg_1.ApiSuccess("获取成功！", 200, new goodDetail_1.GoodDetail(selectedGood, imgURLs)));
    }
    else {
        res.json(new msg_1.ApiError("获取数据失败", 400));
    }
};
