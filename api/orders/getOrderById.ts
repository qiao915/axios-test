import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { RequestHandler } from "express";
import { DataStore } from '../../data/data';
import { Order } from '../../interface/order';

export const getOrderById: RequestHandler = (req, res, next) => {
  try {
    const orderId = parseInt(req.params.id, 10);
    if (isNaN(orderId)) {
      return res.json(new ApiError("无效的订单ID", 400));
    }

    const orders = DataStore.orders as Order[];
    const order = orders.find(o => o.id === orderId);

    if (order) {
      res.json(new ApiSuccess("获取订单成功", 200, order));
    } else {
      res.json(new ApiError("订单不存在", 404));
    }
  } catch (error) {
    res.json(new ApiError("获取订单失败", 500, error));
  }
};
