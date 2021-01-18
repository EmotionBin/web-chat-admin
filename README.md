# web-chat-admin

web-chat-admin 是一个后台管理系统，前端基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element) 实现，后端采用  [Koa](https://koa.bootcss.com) 与 [mysql](https://www.mysql.com) 实现  

它主要是统计用户在 [web-chat](https://www.huangweibinupup.cn:8888) 中的一些操作，追踪用户活动轨迹，以图表的方式来展示  

- [在线预览](https://www.huangweibinupup.cn:9999)

**这里我特意做了免登录的，只需要在 [web-chat](https://www.huangweibinupup.cn:8888) 中进行登录，打开链接即可自动登录**  

PS: 服务器于 2021 年 4 月 17 日到期，如果无法访问，就是服务器到期了  

## 技术栈

**前端**  

- vue@2.6.11
- vue-router@3.2.0
- vuex@3.4.0
- element-ui@2.14.1
- axios@0.21.0
- dayjs@1.9.6
- md5@2.3.0
- nprogress@0.2.0
- echarts@4.9.0

**后端**  

- koa@2.13.0
- axios@0.21.0
- jsonwebtoken@8.5.1

## 项目运行

需要安装高版本 [node](http://nodejs.cn) 与 npm 环境  

```bash
# 克隆项目
git clone https://github.com/EmotionBin/web-chat-admin.git

# 进入项目目录
cd web-chat-admin

# 安装依赖
npm install

# 也可以使用淘宝镜像 cnpm 进行依赖的安装，需要进行换源
cnpm install

# 启动服务
npm run serve
```

项目启动后，打开浏览器访问即可  

## 联系我

我的邮箱 313200064@qq.com  

可以给我发邮件

如果你觉得对你有帮助，可以请我喝杯咖啡

![payme](https://github.com/EmotionBin/web-chat/blob/main/src/assets/dialog/pay.png)  

## License

[MIT](http://opensource.org/licenses/MIT)  

MIT License  

Copyright (c) 2021 EmotionBin  