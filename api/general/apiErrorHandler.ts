
/* 
  错误处理
*/

import { ErrorRequestHandler } from "express";

export const apiErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  
  switch (req.app.get("env")) {
    case "development":
      return res.status(err.status).json(err)
    case 'production':
      return res.status(err.status).json({data: err.publicVersion })
  }
}