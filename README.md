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

#### 1. 登录
  
  * 接口地址     **/api/login**
  * 请求方式     **post**
  * 请求参数:  
  
|  参数名  |  备注  |  类型  | 是否毕传 |  默认值 |
|----------|--------|--------|----------|--------|
| username | 用户名 | String |   必传   |  admin  | 
| password |  密码  | String |   必传   | a123456 (需要Base64编码为YTEyMzQ1Ng==) |
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


#### 2. 商品列表
  
  * 接口地址     **/api/goods**
  * 请求方式     **get**
  * 请求参数:    查询参数
  
  |  参数名  |  备注  |  类型  | 是否毕传 |  默认值 |
  |----------|--------|--------|----------|--------|
  | currency | 货币种类 | String |   非必传   |  无 |
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


#### 3. 商品详情
  
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

#### 4. 新建商品
  
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


    
#### 5. 删除商品
  
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


#### 6. 编辑商品
  
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

#### 7. 上传图片
  
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

#### 8. 图片下载
  
  * 接口地址     **/api/static/download/:id**
  * 请求方式     **get**
  * 请求参数:    如上面接口地址中的 **id** 为需要下载的图片文件名
  * 返回:        图片文件下载
  * 说明:        该接口用于下载上传到服务器的图片文件

#### 9. 用户接口

##### 9.1 获取所有用户
  * 接口地址     **/api/users**
  * 请求方式     **get**
  * 返回数据示例：
  ```json
  {
    "status": 200,
    "data": [
      {
        "id": 1,
        "name": "张三",
        "email": "zhangsan@example.com",
        "age": 25,
        "gender": "男"
      },
      {
        "id": 2,
        "name": "李四",
        "email": "lisi@example.com",
        "age": 30,
        "gender": "女"
      }
    ],
    "message": "获取用户列表成功"
  }
  ```

##### 9.2 获取单个用户
  * 接口地址     **/api/users/:id**
  * 请求方式     **get**
  * 请求参数:    如上面接口地址中的 **id** 为需要查询的用户id
  * 返回数据示例：
  ```json
  {
    "status": 200,
    "data": {
      "id": 1,
      "name": "张三",
      "email": "zhangsan@example.com",
      "age": 25,
      "gender": "男"
    },
    "message": "获取用户成功"
  }
  ```

##### 9.3 创建用户
  * 接口地址     **/api/users**
  * 请求方式     **post**
  * 请求参数:  
  
|  参数名  |  备注  |  类型  | 是否毕传 |  默认值 |
|----------|--------|--------|----------|--------|
| name | 用户名 | String |   必传   |    | 
| email | 邮箱 | String |   必传   |  |
| age | 年龄 | Number |   非必传   |  |
| gender | 性别 | String |   非必传   |  |
  * 返回数据示例：
  ```json
  {
    "status": 200,
    "data": {
      "id": 11,
      "name": "新用户",
      "email": "newuser@example.com",
      "age": 22,
      "gender": "男"
    },
    "message": "创建用户成功"
  }
  ```

##### 9.4 更新用户
  * 接口地址     **/api/users/:id**
  * 请求方式     **put**
  * 请求参数:    如上面接口地址中的 **id** 为需要更新的用户id
  
|  参数名  |  备注  |  类型  | 是否毕传 |  默认值 |
|----------|--------|--------|----------|--------|
| name | 用户名 | String |   非必传   |    | 
| email | 邮箱 | String |   非必传   |  |
| age | 年龄 | Number |   非必传   |  |
| gender | 性别 | String |   非必传   |  |
  * 返回数据示例：
  ```json
  {
    "status": 200,
    "data": {
      "id": 1,
      "name": "更新后的用户名",
      "email": "updated@example.com",
      "age": 26,
      "gender": "男"
    },
    "message": "更新用户成功"
  }
  ```

##### 9.5 删除用户
  * 接口地址     **/api/users/:id**
  * 请求方式     **delete**
  * 请求参数:    如上面接口地址中的 **id** 为需要删除的用户id
  * 返回数据示例：
  ```json
  {
    "status": 200,
    "message": "删除用户成功"
  }
  ```

#### 10. 产品接口

##### 10.1 获取所有产品
  * 接口地址     **/api/products**
  * 请求方式     **get**
  * 返回数据示例：
  ```json
  {
    "status": 200,
    "data": [
      {
        "id": 1,
        "name": "手机",
        "price": 5999,
        "category": "电子产品",
        "stock": 100
      },
      {
        "id": 2,
        "name": "笔记本电脑",
        "price": 9999,
        "category": "电子产品",
        "stock": 50
      }
    ],
    "message": "获取产品列表成功"
  }
  ```

##### 10.2 获取单个产品
  * 接口地址     **/api/products/:id**
  * 请求方式     **get**
  * 请求参数:    如上面接口地址中的 **id** 为需要查询的产品id
  * 返回数据示例：
  ```json
  {
    "status": 200,
    "data": {
      "id": 1,
      "name": "手机",
      "price": 5999,
      "category": "电子产品",
      "stock": 100
    },
    "message": "获取产品成功"
  }
  ```

##### 10.3 创建产品
  * 接口地址     **/api/products**
  * 请求方式     **post**
  * 请求参数:  
  
|  参数名  |  备注  |  类型  | 是否毕传 |  默认值 |
|----------|--------|--------|----------|--------|
| name | 产品名称 | String |   必传   |    | 
| price | 价格 | Number |   必传   |  |
| category | 分类 | String |   非必传   |  |
| stock | 库存 | Number |   非必传   | 0 |
  * 返回数据示例：
  ```json
  {
    "status": 200,
    "data": {
      "id": 5,
      "name": "新产品",
      "price": 1999,
      "category": "电子产品",
      "stock": 50
    },
    "message": "创建产品成功"
  }
  ```

#### 11. 订单接口

##### 11.1 获取所有订单
  * 接口地址     **/api/orders**
  * 请求方式     **get**
  * 返回数据示例：
  ```json
  {
    "status": 200,
    "data": [
      {
        "id": 1,
        "userId": 1,
        "products": [
          {
            "productId": 1,
            "quantity": 1
          },
          {
            "productId": 3,
            "quantity": 2
          }
        ],
        "total": 8597,
        "status": "已完成",
        "createdAt": "2023-05-10T10:30:00Z"
      },
      {
        "id": 2,
        "userId": 2,
        "products": [
          {
            "productId": 2,
            "quantity": 1
          },
          {
            "productId": 4,
            "quantity": 1
          }
        ],
        "total": 10198,
        "status": "待支付",
        "createdAt": "2023-05-11T14:20:00Z"
      }
    ],
    "message": "获取订单列表成功"
  }
  ```

##### 11.2 获取单个订单
  * 接口地址     **/api/orders/:id**
  * 请求方式     **get**
  * 请求参数:    如上面接口地址中的 **id** 为需要查询的订单id
  * 返回数据示例：
  ```json
  {
    "status": 200,
    "data": {
      "id": 1,
      "userId": 1,
      "products": [
        {
          "productId": 1,
          "quantity": 1
        },
        {
          "productId": 3,
          "quantity": 2
        }
      ],
      "total": 8597,
      "status": "已完成",
      "createdAt": "2023-05-10T10:30:00Z"
    },
    "message": "获取订单成功"
  }
  ```

##### 11.3 创建订单
  * 接口地址     **/api/orders**
  * 请求方式     **post**
  * 请求参数:  
  
|  参数名  |  备注  |  类型  | 是否毕传 |  默认值 |
|----------|--------|--------|----------|--------|
| userId | 用户ID | Number |   必传   |    | 
| products | 产品列表 | Array |   必传   |  |
  * 返回数据示例：
  ```json
  {
    "status": 200,
    "data": {
      "id": 3,
      "userId": 1,
      "products": [
        {
          "productId": 1,
          "quantity": 1
        }
      ],
      "total": 5999,
      "status": "待支付",
      "createdAt": "2023-10-15T10:30:00Z"
    },
    "message": "创建订单成功"
  }
  ```