"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiSuccess = exports.ApiError = void 0;
class ApiError extends Error {
    // result: boolean;
    constructor(message, status, data) {
        super();
        this.status = status;
        this.message = message; //消息提示
        this.status = status; //状态码
        this.data = data; //返回数据
        // this.result = status == 200
    }
}
exports.ApiError = ApiError;
class ApiSuccess {
    constructor(message, status, data) {
        this.status = status;
        this.data = data;
        this.message = message; //消息提示
        this.status = status; //状态码
        this.data = data; //返回数据
    }
}
exports.ApiSuccess = ApiSuccess;
