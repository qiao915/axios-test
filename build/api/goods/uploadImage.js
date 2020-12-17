"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUploadImage = void 0;
const data_1 = require("../../data/data");
const uploadFile_1 = require("../general/uploadFile");
const msg_1 = require("../../model/shared/msg");
exports.apiUploadImage = (req, res) => {
    const goodIndex = data_1.DataStore.goods.findIndex((item) => item.id == req.params.id);
    if (goodIndex > -1) {
        const unload = uploadFile_1.getFileUploader(req.app.get("env"));
        unload(req, res, (err) => {
            if (err) {
                res.json(new msg_1.ApiError("上传失败", 400, err));
            }
            else {
                data_1.DataStore.goods[goodIndex].img.push(req.file.filename);
                res.json(new msg_1.ApiSuccess("上传成功", 200, data_1.DataStore.goods[goodIndex]));
            }
        });
    }
    else {
        res.json(new msg_1.ApiError("数据不存在", 400));
    }
};
