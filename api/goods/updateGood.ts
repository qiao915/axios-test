import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
import { NewGood } from "../../interface/newGood";
import { ApiError, ApiSuccess } from '../../model/shared/msg';

export const apiUpdateGood: RequestHandler = (req, res) => {


  console.log(req.body);

  const goodIndex = DataStore.goods.findIndex((item: any) => item.goodId == req.params.id)
  const originalGood = DataStore.goods[goodIndex] // 取出老数据
  const newGood: NewGood = {
    goodId: req.params.id, //id 不能修改
    name: req.body.name || originalGood.name,
    price: req.body.price || originalGood.price,
    currency: req.body.price || originalGood.currency,
    img: req.body.img || originalGood.img
  }
  console.log(newGood);
  if (goodIndex > -1) {
    DataStore.goods.splice(goodIndex, 1, newGood);
    res.json(new ApiSuccess("数据修改成功！", 200, newGood));
  } else {
    res.json(new ApiError("数据不存在", 400));
  }
};



