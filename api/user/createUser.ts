import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { DataStore } from '../../data/data';
import { User } from '../../interface/user';
import fs from 'fs';
import path from 'path';

export const createUser: RequestHandler = (req, res, next) => {
  try {
    // 验证用户输入
    if (!req.body.name || req.body.name.trim() === '') {
      return res.json(new ApiError("用户名不能为空", 400));
    }
    
    if (!req.body.email || !req.body.email.includes('@')) {
      return res.json(new ApiError("请提供有效的邮箱地址", 400));
    }

    const users = DataStore.users as unknown as User[];
    
    // 生成新的用户ID
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id || 0)) + 1 : 1;
    
    // 创建新用户
    const newUser: User = {
      id: newId,
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      gender: req.body.gender
    };
    
    // 添加到用户列表
    users.push(newUser);
    
    // 更新DataStore
    DataStore.users = users as any;
    
    // 保存到文件
    const filePath = path.join(__dirname, '../../../data/users.json');
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
    
    res.json(new ApiSuccess("创建用户成功", 201, newUser));
  } catch (error) {
    res.json(new ApiError("创建用户失败", 500, error));
  }
};