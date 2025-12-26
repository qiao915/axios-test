import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

import {apiErrorHandler} from './api/general/apiErrorHandler'
import {apiDownloadImage} from './api/goods/downloadImage'
import {apiGoodsRouter} from './api/goods/index'
import {upload} from './api/upload'
import { login } from './api/user/login'
import { apiUserRouter } from './api/user/index'
import { apiProductsRouter } from './api/products/index'
import { apiOrdersRouter } from './api/orders/index'

const app = express()

// 使用body-parser中间件处理JSON请求体
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));

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

/* 配置 users 路径 */
app.use("/api/users", apiUserRouter)

/* 配置 products 路径 */
app.use("/api/products", apiProductsRouter)

/* 配置 orders 路径 */
app.use("/api/orders", apiOrdersRouter)

/*下载服务*/
app.get("/api/static/download/:id", apiDownloadImage)

/* 上传 */
app.post("/api/upload", upload);

/* 登录 */
app.post("/api/login", login);

//处理错误
app.use(apiErrorHandler)

app.listen(3000, () => {
    console.log('Server started on port 3000....');
});