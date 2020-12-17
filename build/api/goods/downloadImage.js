"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDownloadImage = void 0;
const path_1 = __importDefault(require("path"));
const msg_1 = require("../../model/shared/msg");
const dirName_1 = require("../general/dirName");
exports.apiDownloadImage = (req, res, next) => {
    const dirName = dirName_1.fileNameToNameFn(req.params.id);
    res.download(path_1.default.resolve("./", "public", dirName, req.params.id), err => {
        if (err) {
            next(new msg_1.ApiError("下载失败", 400));
        }
    });
};
