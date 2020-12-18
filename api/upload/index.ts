



import { RequestHandler } from "express";
import { ApiError, ApiSuccess } from "../../model/shared/msg";
import { getFileUploader } from "../general/uploadFile";

export const upload: RequestHandler = (req, res, next) => {

  const unload = getFileUploader(req.app.get("env"));

  // if (!req.file) return res.json(new ApiError("请选择上传文件", 400))

  unload(req, res, (err: any) => {
    if (err) {
      res.json(new ApiError("上传失败", 400))
    } else {
      let filename = ''
      if (req.app.get("env") == 'development') filename = `/static/${req.file.filename}`;
      else filename = `/static/${req.file.filename}`;

      res.json(new ApiSuccess("上传成功！", 200, {
          filePath: filename,
          filename: req.file.filename
        }
      ))
    }
  })


}
