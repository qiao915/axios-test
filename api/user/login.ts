
import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { v4 as uuidv4 } from 'uuid';


export const login: RequestHandler = (req, res, next) => {
  const requireFilds = ["username","password"]; //username password 必传
  const givenFields = Object.getOwnPropertyNames(req.body)
  
  console.log(req.body);

  if (!requireFilds.every(field => givenFields.includes(field))) return res.json(new ApiError("缺少参数",400))
  
  if (req.body.username == "admin" && req.body.password == "YTEyMzQ1Ng==")
    res.json(new ApiSuccess("登录成功！", 200, { "token": uuidv4() }))
  else
    res.json(new ApiError("账号或者密码错误！", 400))
};
