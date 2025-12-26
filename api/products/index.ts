import { Router } from "express";
import { getAllProducts } from "./getAllProducts";
import { getProductById } from "./getProductById";
import { createProduct } from "./createProduct";

export const apiProductsRouter = Router();

// 获取所有产品
apiProductsRouter.get('/', getAllProducts);

// 获取单个产品
apiProductsRouter.get('/:id', getProductById);

// 创建产品
apiProductsRouter.post('/', createProduct);
