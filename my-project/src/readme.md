#### 运行配置
##### 环境说明
1. 开发工具： webstorm
2. 调试设备： window10 chrome、iphone SE safari
3. 构建工具： vue-cli
4. mock工具： moco

##### 文件说明
- mock: mock工具
- PRD: 需求说明文档
- src:
  + assets: 小图标等
  + components: 组件及路由
    - CountDown: 倒计时组件
    - LoadBar: 加载条组件
    - GoodsPage: 商品页
    - SelectBox: 区域选择页（商品页嵌套路由）
  + router: 路由
- static: 静态图片等

##### 本地运行说明（含局域网）
1. 本地运行需要修改: `config/index.js` 中的 `host`,设置成本地IP即可 
2. 用命令行进入`my-project`文件夹下，输入`npm run dev`

##### mock运行说明
1. 进入`my-project/mock`双击`mock.bat`或者用命令行进入并输入`java -jar moco-runner-0.12.0-standalone.jar http -p 8081 -c mock.json
2. 进入`GoodsPage.vue`，修改 `created()` 中的`let localTest = false`，并修改 `let url` 中的ip地址
3. 同理修改`SelectBox.vue`中的`localTest`和`url`
