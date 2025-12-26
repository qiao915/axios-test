
import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { DataStore } from '../../data/data';
import { User } from '../../interface/user';
import { v4 as uuidv4 } from 'uuid';

export const login: RequestHandler = (req, res, next) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res.json(new ApiError("用户名和密码不能为空", 400));
    }

    const users = DataStore.users as unknown as User[];
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
      return res.json(new ApiError("用户名或密码错误", 401));
    }

    res.json(new ApiSuccess("登录成功！", 200, { "token": uuidv4(), "role": user.role || "user" }));
  } catch (error) {
    res.json(new ApiError("登录失败", 500, error));
  }
};