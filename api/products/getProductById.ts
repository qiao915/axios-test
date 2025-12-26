import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { DataStore } from '../../data/data';
import { Product } from '../../interface/product';

export const getProductById: RequestHandler = (req, res, next) => {
  try {
    const productId = parseInt(req.params.id, 10);
    if (isNaN(productId)) {
      return res.json(new ApiError("无效的产品ID", 400));
    }

    const products = DataStore.products as Product[];
    const product = products.find(p => p.id === productId);

    if (product) {
      res.json(new ApiSuccess("获取产品成功", 200, product));
    } else {
      res.json(new ApiError("产品不存在", 404));
    }
  } catch (error) {
    res.json(new ApiError("获取产品失败", 500, error));
  }
};
