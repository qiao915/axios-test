import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
// import { GoodSummary } from '../../model/shared/goodSummary';

import { GoodSummary } from '../../model/shared/goodSummary'
import { GoodFilter } from '../../model/shared/goodFilter';
import { ApiSuccess } from '../../model/shared/msg';



export const apiGetGood: RequestHandler = (req, res) => {
  let arr = DataStore.goods.map((item: any) => {
    let imgArr = item.img.map((value: string): string => {
      return value.indexOf("/static") == -1 ?  `/static/${value}` : value;
    });
    return new GoodSummary(Object.assign(item, {img: imgArr}) );
  })
  res.json(new ApiSuccess("获取成功！", 200, arr));
};