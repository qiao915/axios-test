import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { DataStore } from '../../data/data';
import { Product } from '../../interface/product';

export const getAllProducts: RequestHandler = (req, res, next) => {
  try {
    const products = DataStore.products as Product[];
    res.json(new ApiSuccess("获取产品列表成功", 200, products));
  } catch (error) {
    res.json(new ApiError("获取产品列表失败", 500, error));
  }
};
