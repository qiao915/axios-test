"use strict";
/*
  错误处理
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiErrorHandler = void 0;
exports.apiErrorHandler = (err, req, res, next) => {
    switch (req.app.get("env")) {
        case "development":
            return res.status(err.status).json(err);
        case 'production':
            return res.status(err.status).json({ data: err.publicVersion });
    }
};
