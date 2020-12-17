/* 实现上传图片 */

import { RequestHandler } from "express";
import multer from 'multer'
import path from "path";
import { v4 as uuidv4 } from 'uuid';
import { fileTypeToNameFn } from "./dirName";

export function getFileUploader(env: string): RequestHandler {


  switch (env) {
    case "development":
      const fileId = uuidv4();
      const fileStore = multer.diskStorage({
        destination: (req, file, cb) => {
          let fileType = file.mimetype.split("/")[0]
          let dirName = fileTypeToNameFn(fileType)
          cb(null, path.resolve("./", "public", dirName));     //配置图片上传路径
        },
        filename: (req, file, cb) => {
          cb(null, fileId + path.extname(file.originalname))   //设置上传之后文件的名字
        }
      });

      return multer({ storage: fileStore }).single("file")
    case "production":   //线上环境存到数据库
      return (req, res, next) => { next() }
    default:
      return (req, res, next) => { next() }
  }
}