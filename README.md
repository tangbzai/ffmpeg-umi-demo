## 复现umi4中使用@ffmpeg/ffmpeg的问题


### 环境

因为需要用到https建立安全上下文，所以请先准备好 `mkcert` 环境，具体看[文档](https://umijs.org/docs/api/config#https)

### 复现步骤
1. 安装依赖
```
pnpm i
```
2. 运行项目
```
pnpm run dev
```
3. 打开页面与控制台
4. 刷新页面即可看到错误信息