"use strict";
/* 实现上传图片 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileUploader = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const dirName_1 = require("./dirName");
function getFileUploader(env) {
    switch (env) {
        case "development":
            const fileId = uuid_1.v4();
            const fileStore = multer_1.default.diskStorage({
                destination: (req, file, cb) => {
                    let fileType = file.mimetype.split("/")[0];
                    let dirName = dirName_1.fileTypeToNameFn(fileType);
                    cb(null, path_1.default.resolve("./", "public", dirName)); //配置图片上传路径
                },
                filename: (req, file, cb) => {
                    cb(null, fileId + path_1.default.extname(file.originalname)); //设置上传之后文件的名字
                }
            });
            return multer_1.default({ storage: fileStore }).single("file");
        case "production": //线上环境存到数据库
            return (req, res, next) => { next(); };
        default:
            return (req, res, next) => { next(); };
    }
}
exports.getFileUploader = getFileUploader;
