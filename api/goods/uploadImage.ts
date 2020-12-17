import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
import { getFileUploader } from '../general/uploadFile';
import { ApiError, ApiSuccess } from '../../model/shared/msg';

export const apiUploadImage: RequestHandler = (req, res) => {
  const goodIndex = DataStore.goods.findIndex((item: any) => item.id == req.params.id)


  if (goodIndex > -1) {
    const unload = getFileUploader(req.app.get("env"));
    unload(req, res, (err: any) => {
      if (err) {
        res.json(new ApiError("上传失败", 400, err))
      } else {
        DataStore.goods[goodIndex].img.push(req.file.filename)
        res.json(new ApiSuccess("上传成功", 200, DataStore.goods[goodIndex]))
      }

    })
  } else {
    res.json(new ApiError("数据不存在", 400))
  }
};