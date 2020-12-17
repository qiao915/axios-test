"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const apiErrorHandler_1 = require("./api/general/apiErrorHandler");
const downloadImage_1 = require("./api/goods/downloadImage");
const index_1 = require("./api/goods/index");
const upload_1 = require("./api/upload");
const login_1 = require("./api/user/login");
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
/* 访问路径 /static 路径  */
app.use("/static", express_1.default.static(path_1.default.resolve("./", "public", "images")));
app.disable("x-powered-by"); //隐藏接口返回 X-Powered-By 字段
/* s设置允许跨域 */
app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE"
    });
    next();
});
/* 配置 goods 路径 */
app.use("/api/goods", index_1.apiGoodsRouter);
/*下载服务*/
app.get("/api/static/download/:id", downloadImage_1.apiDownloadImage);
/* 上传 */
app.post("/api/upload", upload_1.upload);
/* 登录 */
app.post("/api/login", login_1.login);
//处理错误
app.use(apiErrorHandler_1.apiErrorHandler);
app.listen(5000, () => {
    console.log('Server started....');
});
