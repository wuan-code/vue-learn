# vue-learn
### 前言
之前一直在断断续续的接触到vue,但是一段时间没有接触，又会忘记，忘记之后有需要重新在学习，来来回回很浪费时间，所以干脆写个小demo，将一般vue会用到的都记起来，方便以后查看
### 说明
非常简单的一个vue2 + vuex + axios的项目，整个流程一目了然，麻雀虽小，五脏俱全，适合作为入门练习。
主要有两个页面，主页是 lhttp://localhost:8395/(主要是实现了组件之间的数据)
http://localhost:8395/home 是实现 vuex+axios的组件，涉及到跨域请求数据,api接口配置在src/config.js中

### 项目运行
```
# 安装依赖 （主要使用了scss,moment,vuex,axios）
npm install

# 开启本地服务器localhost:8395,在config/index.js的port设置
npm run dev

# 发布环境
npm run build
```
