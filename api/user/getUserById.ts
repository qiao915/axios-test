import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { DataStore } from '../../data/data';
import { User } from '../../interface/user';

export const getUserById: RequestHandler = (req, res, next) => {
  try {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
      return res.json(new ApiError("无效的用户ID", 400));
    }

    const users = DataStore.users as unknown as User[];
    const user = users.find(u => u.id === userId);

    if (user) {
      res.json(new ApiSuccess("获取用户成功", 200, user));
    } else {
      res.json(new ApiError("用户不存在", 404));
    }
  } catch (error) {
    res.json(new ApiError("获取用户失败", 500, error));
  }
};
