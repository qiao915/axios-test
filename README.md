## express + typescript 模拟api


### 运行

* 安装依赖
```bash
npm i
# 或者
cnpm i
```

* 运行
```bash
npm start
# 或者
cnpm run start-server
```

### 目录结构说明

```bash
├── api             # 接口文件夹
├── data            # 模拟json数据
├── build           # ts编译后文件存放文件夹
├── interface     
├── model
│   └── shared
├── public          # 数据静态资源存放
│   ├── images
│   └── word 
└── server.ts       # api入口文件
```

### 接口文档

#### 1,登录
  
  * 接口地址     **/api/login**
  * 请求方式     **post**
  * 请求参数:  
  
|  参数名  |  备注  |  类型  | 是否毕传 |  默认值 |
|----------|--------|--------|----------|--------|
| username | 用户名 | String |   必传   |  admin  | 
| password |  密码  | String |   必传   | a123456 |
  * 返回数据示例：
  ```json
  {
    "status": 200,
    "data": {
      "token": "691af96e-85b3-4f26-aaad-e501422a8fd3"
    },
    "message": "登录成功！"
  }
  ```


#### 2,商品列表
  
  * 接口地址     **/api/goods**
  * 请求方式     **get**
  * 返回数据示例：
    ```json
    {
      "status": 200,
      "data": [{
        "time": "2020-12-18T06:43:37.103Z",
        "goodId": "drasdff2w4523fasdf353535",
        "name": "Apple iPhone 12 Pro Max (A2412) 128GB 海蓝色 支持移动联通电信5G 双卡双待手机",
        "price": 9299,
        "currency": "RMB",
        "img": ["/static/iPhone12sdfasfwrw.jpg", "/static/iPhone122345sd24323sdfsd.jpg"]
      }],
      "message": "获取成功！"
    }
    ```


#### 3,商品详情
  
  * 接口地址     **/api/goods/:goodId/detail**
  * 请求方式     **get**
  * 请求参数:    如上面接口地址中的 **goodId** 为需要查询详情的商品id
  * 返回数据示例：
    ```json
    {
      "status": 200,
      "data": {
        "time": "2020-12-18T06:43:16.336Z",
        "goodId": "drasdff2w4523fasdf353535",
        "name": "Apple iPhone 12 Pro Max (A2412) 128GB 海蓝色 支持移动联通电信5G 双卡双待手机",
        "price": 9299,
        "currency": "RMB",
        "img": ["/static/iPhone12sdfasfwrw.jpg", "/static/iPhone122345sd24323sdfsd.jpg"]
      },
      "message": "获取成功！"
    }
    ```

#### 4,新建商品
  
  * 接口地址     **/api/goods**
  * 请求方式     **post**
  * 请求参数:   
  
  |  参数名  |  备注  |  类型  | 是否毕传 |  默认值 |
  |----------|--------|--------|----------|--------|
  | name | 商品名称 | String |   必传   |    | 
  | price |  价格  | String |   必传   |  |
  | currency |  货币种类  | String |   非必传   | RMB |
  | img |  商品图片  | String[] |   非必传   | [] |
  * 返回数据示例：
    ```json
    {
      "status": 200,
      "data": {
          "goodId": "63c0171d-2061-40d7-b17c-87bf9ef2b718",
          "name": "测试添加商品21242353654564",
          "price": "1998",
          "currency": "RMB",
          "img": []
      },
      "message": "数据添加成功"
    }
    ```


    
#### 5,删除商品
  
  * 接口地址     **/api/goods/:id/delete**
  * 请求方式     **delete**
  * 请求参数:    如上面接口地址中的 **goodId** 为需要删除的商品id
  * 返回数据示例：
    ```json
    {
        "status": 200,
        "message": "删除成功！"
    }
    ```


#### 6,编辑商品
  
  * 接口地址     **/api/goods/:id/edit**
  * 请求方式     **put**
  * 请求参数:    如上面接口地址中的 **goodId** 为需要编辑的商品id
  
  |  参数名  |  备注  |  类型  | 是否毕传 |  默认值 |
  |----------|--------|--------|----------|--------|
  | name | 商品名称 | String |   非必传   |    | 
  | price |  价格  | String |   非必传   |  |
  | currency |  货币种类  | String |   非必传   |  |
  | img |  商品图片  | String[] |   非必传   |  |
  * 返回数据示例：
    ```json
    {
        "status": 200,
        "data": {
            "goodId": "drasdff2w4523fasdf353535",
            "name": "1111111111111111",
            "price": 9299,
            "currency": "RMB",
            "img": [
                "iPhone12sdfasfwrw.jpg",
                "iPhone122345sd24323sdfsd.jpg"
            ]
        },
        "message": "数据修改成功！"
    }
    ```

#### 7,上传图片
  
  * 接口地址     **/api/upload**
  * 请求方式     **post**
  * 请求参数:    form-data 格式
  * 返回数据示例：
    ```json
    {
        "status": 200,
        "data": {
            "filePath": "/static/c2b25ed7-cff3-4f79-a077-53c680f4413c.jpg",
            "filename": "c2b25ed7-cff3-4f79-a077-53c680f4413c.jpg"
        },
        "message": "上传成功！"
    }
    ```






