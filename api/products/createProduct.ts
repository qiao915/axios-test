import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { DataStore } from '../../data/data';
import { Product } from '../../interface/product';
import fs from 'fs';
import path from 'path';

export const createProduct: RequestHandler = (req, res, next) => {
  try {
    // 验证产品信息
    if (!req.body.name || req.body.name.trim() === '') {
      return res.json(new ApiError("产品名称不能为空", 400));
    }
    
    if (typeof req.body.price !== 'number' || req.body.price <= 0) {
      return res.json(new ApiError("请提供有效的产品价格", 400));
    }
    
    if (!req.body.category || req.body.category.trim() === '') {
      return res.json(new ApiError("产品类别不能为空", 400));
    }
    
    if (typeof req.body.stock !== 'number' || req.body.stock < 0) {
      return res.json(new ApiError("请提供有效的库存数量", 400));
    }

    const products = DataStore.products as Product[];
    
    // 生成新的产品ID
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    
    // 创建新产品
    const newProduct: Product = {
      id: newId,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock
    };
    
    // 添加到产品列表
    products.push(newProduct);
    
    // 更新DataStore
    DataStore.products = products;
    
    // 保存到文件
    const filePath = path.join(__dirname, '../../../data/products.json');
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf8');
    
    res.json(new ApiSuccess("创建产品成功", 201, newProduct));
  } catch (error) {
    res.json(new ApiError("创建产品失败", 500, error));
  }
};
