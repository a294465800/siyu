## 运行
```
npm i
```
## package.json
```
npm run dev   // open http-server
npm run watch   //listening the tmp, assets folder
npm run build     // build assets, create blade_views, src, views folder 
```

## 文件结构
```
./--
  |--/assets (原 css、js)
  |--/blade_views (打包后的 blade 模板)
  |--/plugins (第三方库、框架)
  |--/src  (打包压缩 assets 后的资源)
  |--/tmp  (写页面的临时文件夹)
  |--/views  (打包后能访问的正常 html)
.gitignore
gulpfile.js
package-lock.json
package.json
README.md
```