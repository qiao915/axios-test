import { Router } from "express";
import { getAllOrders } from "./getAllOrders";
import { getOrderById } from "./getOrderById";
import { createOrder } from "./createOrder";

export const apiOrdersRouter = Router();

// 获取所有订单
apiOrdersRouter.get('/', getAllOrders);

// 获取单个订单
apiOrdersRouter.get('/:id', getOrderById);

// 创建订单
apiOrdersRouter.post('/', createOrder);
