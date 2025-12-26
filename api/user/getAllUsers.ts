import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { DataStore } from '../../data/data';
import { User } from '../../interface/user';

export const getAllUsers: RequestHandler = (req, res, next) => {
  try {
    const users = DataStore.users as unknown as User[];
    res.json(new ApiSuccess("获取用户列表成功", 200, users));
  } catch (error) {
    res.json(new ApiError("获取用户列表失败", 500, error));
  }
};
