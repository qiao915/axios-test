import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { NewGood } from "../../interface/newGood";
import { ApiError, ApiSuccess } from '../../model/shared/msg';


export const apiCreateData: RequestHandler = (req, res, next) => {
  const requireFilds = ["name","price"]; // name price 必传
  const givenFields = Object.getOwnPropertyNames(req.body)
  
  

  if (!requireFilds.every(field => givenFields.includes(field))) return next(new ApiError("缺少参数", 400));
  const newGood: NewGood = {
    goodId: uuidv4(),
    name: req.body.name,
    price: req.body.price,
    currency: req.body.currency || "RMB",
    img: req.body.img || []
  }
  DataStore.goods.push(newGood)
  
  res.json(new ApiSuccess("数据添加成功", 200, newGood ))

};