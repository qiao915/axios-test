
import { Request, Response ,NextFunction} from 'express'

export interface CumtomRequest extends Request {
  user?: string
}
export interface CumtomResponse extends Response {
  user?: string
}
export type CustomRequestHandler = (
  req: CumtomRequest,
  res: CumtomResponse,
  next: NextFunction
) => any
