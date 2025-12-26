import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { DataStore } from '../../data/data';
import { Order } from '../../interface/order';

export const getAllOrders: RequestHandler = (req, res, next) => {
  try {
    const orders = DataStore.orders as Order[];
    res.json(new ApiSuccess("获取订单列表成功", 200, orders));
  } catch (error) {
    res.json(new ApiError("获取订单列表失败", 500, error));
  }
};
