import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
import { ApiError, ApiSuccess } from '../../model/shared/msg';



export const apiDeleteGood: RequestHandler = (req, res) => {
  const goodIndex = DataStore.goods.findIndex((item: any) => item.goodId == req.params.id)
  if (goodIndex > -1) {
    DataStore.goods.splice(goodIndex, 1);
    
    res.json(new ApiSuccess("删除成功！", 200));
  } else {
    res.json(new ApiError('您删除的数据不存在', 400));
  }
};