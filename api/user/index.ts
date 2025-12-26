import { Router } from "express";
import { getAllUsers } from "./getAllUsers";
import { getUserById } from "./getUserById";
import { createUser } from "./createUser";
import { updateUser } from "./updateUser";
import { deleteUser } from "./deleteUser";
import { login } from "./login";

export const apiUserRouter = Router();

// 登录接口
apiUserRouter.post('/login', login);

// 获取所有用户
apiUserRouter.get('/', getAllUsers);

// 获取单个用户
apiUserRouter.get('/:id', getUserById);

// 创建用户
apiUserRouter.post('/', createUser);

// 更新用户
apiUserRouter.put('/:id', updateUser);

// 删除用户
apiUserRouter.delete('/:id', deleteUser);