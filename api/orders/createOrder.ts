import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { DataStore } from '../../data/data';
import { Order, OrderProduct } from '../../interface/order';
import { User } from '../../interface/user';
import { Product } from '../../interface/product';
import fs from 'fs';
import path from 'path';

export const createOrder: RequestHandler = (req, res, next) => {
  try {
    // 验证订单信息
    if (typeof req.body.userId !== 'number') {
      return res.json(new ApiError("请提供有效的用户ID", 400));
    }
    
    if (!Array.isArray(req.body.products) || req.body.products.length === 0) {
      return res.json(new ApiError("订单中至少包含一个产品", 400));
    }
    
    // 验证用户是否存在
    const users = DataStore.users as User[];
    const user = users.find(u => u.id === req.body.userId);
    if (!user) {
      return res.json(new ApiError("用户不存在", 404));
    }
    
    // 验证产品和计算总价
    const products = DataStore.products as Product[];
    let total = 0;
    
    for (const item of req.body.products) {
      if (typeof item.productId !== 'number' || typeof item.quantity !== 'number' || item.quantity <= 0) {
        return res.json(new ApiError("产品信息无效", 400));
      }
      
      const product = products.find(p => p.id === item.productId);
      if (!product) {
        return res.json(new ApiError(`产品ID ${item.productId} 不存在`, 404));
      }
      
      total += product.price * item.quantity;
    }
    
    const orders = DataStore.orders as Order[];
    
    // 生成新的订单ID
    const newId = orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1;
    
    // 创建新订单
    const newOrder: Order = {
      id: newId,
      userId: req.body.userId,
      products: req.body.products as OrderProduct[],
      total: total,
      status: req.body.status || "待支付",
      createdAt: new Date().toISOString()
    };
    
    // 添加到订单列表
    orders.push(newOrder);
    
    // 更新DataStore
    DataStore.orders = orders;
    
    // 保存到文件
    const filePath = path.join(__dirname, '../../../data/orders.json');
    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2), 'utf8');
    
    res.json(new ApiSuccess("创建订单成功", 201, newOrder));
  } catch (error) {
    res.json(new ApiError("创建订单失败", 500, error));
  }
};
