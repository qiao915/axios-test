import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { DataStore } from '../../data/data';
import { User } from '../../interface/user';
import fs from 'fs';
import path from 'path';

export const updateUser: RequestHandler = (req, res, next) => {
  try {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
      return res.json(new ApiError("无效的用户ID", 400));
    }

    const users = DataStore.users as unknown as User[];
    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
      return res.json(new ApiError("用户不存在", 404));
    }

    // 验证用户输入
    if (req.body.name !== undefined && req.body.name.trim() === '') {
      return res.json(new ApiError("用户名不能为空", 400));
    }
    
    if (req.body.email !== undefined && !req.body.email.includes('@')) {
      return res.json(new ApiError("请提供有效的邮箱地址", 400));
    }

    // 更新用户信息
    users[index] = { ...users[index], ...req.body };
    
    // 更新DataStore
    DataStore.users = users as any;
    
    // 保存到文件
    const filePath = path.join(__dirname, '../../../data/users.json');
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
    
    res.json(new ApiSuccess("更新用户成功", 200, users[index]));
  } catch (error) {
    res.json(new ApiError("更新用户失败", 500, error));
  }
};
