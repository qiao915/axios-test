"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const msg_1 = require("../../model/shared/msg");
const uuid_1 = require("uuid");
exports.login = (req, res, next) => {
    const requireFilds = ["username", "password"]; //username password 必传
    const givenFields = Object.getOwnPropertyNames(req.body);
    console.log(req.body);
    if (!requireFilds.every(field => givenFields.includes(field)))
        return res.json(new msg_1.ApiError("缺少参数", 400));
    if (req.body.username == "admin" && req.body.password == "YTEyMzQ1Ng==")
        res.json(new msg_1.ApiSuccess("登录成功！", 200, { "token": uuid_1.v4() }));
    else
        res.json(new msg_1.ApiError("账号或者密码错误！", 400));
};
