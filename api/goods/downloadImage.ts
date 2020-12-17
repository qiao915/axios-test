

import { RequestHandler } from "express";
import path from 'path'
import { ApiError } from "../../model/shared/msg";
import { fileNameToNameFn } from "../general/dirName";

export const apiDownloadImage: RequestHandler = (req, res, next) => {

  const dirName = fileNameToNameFn(req.params.id)

  res.download(path.resolve("./", "public", dirName, req.params.id), err => {
    if (err) {
      next(new ApiError("下载失败", 400))
    }
  })

}