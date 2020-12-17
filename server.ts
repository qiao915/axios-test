import express from 'express'
import bodyParser from "body-parser"
import path from 'path'

import {apiErrorHandler} from './api/general/apiErrorHandler'
import {apiDownloadImage} from './api/goods/downloadImage'
import {apiGoodsRouter} from './api/goods/index'
import {upload} from './api/upload'
import { login } from './api/user/login'

const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


/* 访问路径 /static 路径  */
app.use("/static", express.static(path.resolve("./", "public", "images")))

app.disable("x-powered-by")    //隐藏接口返回 X-Powered-By 字段

/* s设置允许跨域 */
app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE"
    })
    next()
})

/* 配置 goods 路径 */
app.use("/api/goods", apiGoodsRouter)

/*下载服务*/
app.get("/api/static/download/:id", apiDownloadImage)

/* 上传 */
app.post("/api/upload", upload);

/* 登录 */
app.post("/api/login", login);


//处理错误
app.use(apiErrorHandler)

app.listen(5000, () => {
    console.log('Server started....');
});