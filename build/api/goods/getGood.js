"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetGood = void 0;
const data_1 = require("../../data/data");
// import { GoodSummary } from '../../model/shared/goodSummary';
const goodSummary_1 = require("../../model/shared/goodSummary");
const msg_1 = require("../../model/shared/msg");
exports.apiGetGood = (req, res) => {
    let arr = data_1.DataStore.goods.map((item) => {
        let imgArr = item.img.map((value) => {
            return value.indexOf("/static") == -1 ? `/static/${value}` : value;
        });
        return new goodSummary_1.GoodSummary(Object.assign(item, { img: imgArr }));
    });
    res.json(new msg_1.ApiSuccess("获取成功！", 200, arr));
};
