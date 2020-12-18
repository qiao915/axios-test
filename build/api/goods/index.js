"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGoodsRouter = void 0;
const express_1 = require("express");
const checkGoodFilter_1 = require("./checkGoodFilter");
const createData_1 = require("./createData");
const deleteGood_1 = require("./deleteGood");
const getGoodDetail_1 = require("./getGoodDetail");
const getGood_1 = require("./getGood");
const updateGood_1 = require("./updateGood");
exports.apiGoodsRouter = express_1.Router();
//  $router         GET /api/goods
//  @desc           查询所有信息列表
exports.apiGoodsRouter.get('/', checkGoodFilter_1.apiCheckGoodFilter, getGood_1.apiGetGood);
//  $router         GET /api/goods/:id/detail
//  @desc           查询信息详情 
exports.apiGoodsRouter.get('/:id/detail', getGoodDetail_1.apiGetGoodDetail);
//  $router         POST /api/goods
//  @desc           创建信息 
exports.apiGoodsRouter.post('/', createData_1.apiCreateData);
//  $router         DELETE /api/goods/:id/delete
//  @desc           删除对应id信息 
exports.apiGoodsRouter.delete('/:id/delete', deleteGood_1.apiDeleteGood);
//  $router         PUT /api/goods/:id/edit
//  @desc           更新对应id信息 
exports.apiGoodsRouter.put('/:id/edit', updateGood_1.apiUpdateGood);
