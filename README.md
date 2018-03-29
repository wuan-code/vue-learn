# vue-learn
### 前言
之前一直在断断续续的接触到vue,但是一段时间没有做又会忘记，需要重新学习，来来回回很浪费时间，干脆写个小demo，将一般vue会用到的都记起来，方便以后查看
### 说明
1. 非常简单的一个vue2 + vuex + axios的项目，整个流程一目了然，麻雀虽小，五脏俱全，适合作为入门练习。
2.在config/index.js的port设置端口:localhost:8395
2. http://localhost:8395/  实现组件之间的数据
3. http://localhost:8395/home 实现vuex+axios的组件，涉及到跨域请求数据(接口实现是用laravel,laravel-cors包可以实现跨域),api接口配置在src/config.js中

### 项目运行
```
# 安装依赖 （主要使用了scss,moment,vuex,axios）
npm install

# 开启本地服务
npm run dev

# 发布环境
npm run build
```
### 效果图
![Image text](https://github.com/yaobin24/vue-learn/blob/master/static/img/1.png)

![Image text](https://github.com/yaobin24/vue-learn/blob/master/static/img/2.png)

