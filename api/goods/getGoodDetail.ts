import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';

import { GoodDetail } from '../../model/shared/goodDetail'
import { ApiError, ApiSuccess } from '../../model/shared/msg';


export const apiGetGoodDetail: RequestHandler = (req, res) => {

  console.log(req.params.id);

  const selectedGood = DataStore.goods.find((item: any) => item.goodId == req.params.id)

  if (selectedGood) {
    const imgURLs = selectedGood.img.map((item: string) => {
      return  item.indexOf("/static") == -1 ?  `/static/${item}` : item;
    })

    res.json(new ApiSuccess("获取成功！", 200, new GoodDetail(selectedGood, imgURLs)));
  } else {
    res.json(new ApiError("获取数据失败", 400))
  }

};
