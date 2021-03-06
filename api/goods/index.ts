import { Router } from "express";
import { apiCheckGoodFilter } from "./checkGoodFilter";
import { apiCreateData } from "./createData";
import { apiDeleteGood } from "./deleteGood";
import { apiGetGoodDetail } from "./getGoodDetail";
import { apiGetGood } from "./getGood";
import { apiUpdateGood } from "./updateGood";

export let apiGoodsRouter = Router()



//  $router         GET /api/goods
//  @desc           查询所有信息列表
apiGoodsRouter.get('/',apiCheckGoodFilter, apiGetGood);

//  $router         GET /api/goods/:id/detail
//  @desc           查询信息详情 
apiGoodsRouter.get('/:id/detail', apiGetGoodDetail);

//  $router         POST /api/goods
//  @desc           创建信息 
apiGoodsRouter.post('/', apiCreateData);

//  $router         DELETE /api/goods/:id/delete
//  @desc           删除对应id信息 
apiGoodsRouter.delete('/:id/delete', apiDeleteGood);

//  $router         PUT /api/goods/:id/edit
//  @desc           更新对应id信息 
apiGoodsRouter.put('/:id/edit', apiUpdateGood);

