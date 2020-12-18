"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const msg_1 = require("../../model/shared/msg");
const uploadFile_1 = require("../general/uploadFile");
exports.upload = (req, res, next) => {
    const unload = uploadFile_1.getFileUploader(req.app.get("env"));
    // if (!req.file) return res.json(new ApiError("请选择上传文件", 400))
    unload(req, res, (err) => {
        if (err) {
            res.json(new msg_1.ApiError("上传失败", 400));
        }
        else {
            let filename = '';
            if (req.app.get("env") == 'development')
                filename = `/static/${req.file.filename}`;
            else
                filename = `/static/${req.file.filename}`;
            res.json(new msg_1.ApiSuccess("上传成功！", 200, {
                filePath: filename,
                filename: req.file.filename
            }));
        }
    });
};
