import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { DataStore } from '../../data/data';
import { User } from '../../interface/user';
import fs from 'fs';
import path from 'path';

export const deleteUser: RequestHandler = (req, res, next) => {
  try {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
      return res.json(new ApiError("无效的用户ID", 400));
    }

    const users = DataStore.users as unknown as User[];
    const filteredUsers = users.filter(u => u.id !== userId);

    if (filteredUsers.length === users.length) {
      return res.json(new ApiError("用户不存在", 404));
    }

    // 更新DataStore
    DataStore.users = filteredUsers as any;
    
    // 保存到文件
    const filePath = path.join(__dirname, '../../../data/users.json');
    fs.writeFileSync(filePath, JSON.stringify(filteredUsers, null, 2), 'utf8');
    
    res.json(new ApiSuccess("删除用户成功", 200));
  } catch (error) {
    res.json(new ApiError("删除用户失败", 500, error));
  }
};
