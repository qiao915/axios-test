"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCheckGoodFilter = void 0;
const msg_1 = require("../../model/shared/msg");
const goodFilter_1 = require("../../model/shared/goodFilter");
exports.apiCheckGoodFilter = (req, res, next) => {
    const filters = new goodFilter_1.GoodFilter(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(new msg_1.ApiError("参数有误", 400));
        }
    }
    next();
};
