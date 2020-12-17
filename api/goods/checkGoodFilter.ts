import { RequestHandler } from "express";
import { ApiError } from "../../model/shared/msg";
import { GoodFilter } from "../../model/shared/goodFilter";

export const apiCheckGoodFilter: RequestHandler = (req, res, next) => {

  const filters = new GoodFilter(req.query)

  for (let filter of Object.getOwnPropertyNames(req.query)) {
    if (!filters.hasOwnProperty(filter)) {
      next(new ApiError("参数有误", 400))
    }
  }
  next()

}