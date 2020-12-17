




export class ApiError extends Error {
  data: any;
  // result: boolean;
  constructor(message: string, public status: number, data?: any) {
    super();
    this.message = message;  //消息提示
    this.status = status;    //状态码
    this.data = data         //返回数据
    // this.result = status == 200

  }
}

export class ApiSuccess{
  message: string;
  constructor(message: string, public status: number, public data?: any) {
    this.message = message;  //消息提示
    this.status = status;    //状态码
    this.data = data         //返回数据

  }
}