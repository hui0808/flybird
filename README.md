# flybird

该游戏使用了一个由纯**ES6**自建的**游戏框架**完成

该框架的**核心原理**是通过**定时器**定义一个**游戏帧率**，在每一帧里都会依次执行 **update**、**debug** 和 **draw** 这一调用链，而这就像 **React** 里的组件一样，父组件的 **render** 会调用子组件的 **render**，在我的框架里是 **Game -> Scene -> ImageMode | AnimationMode | TextMode**，这样不用每次手动去更新和绘制视图页面，**将逻辑和视图分离出来**。

实现了**场景切换**，如 game over场景

实现了**数据双向绑定**，能随时控制各种参数

实现了**资源预加载**，在资源全部加载完成后游戏才开始

实现了**动态人物模型**，能在 canvas 显示动态的人物效果

> [在线地址](http://106.53.84.52/game/flybird/)

# 操作

按`k`开始游戏

按`w`或鼠标左键控制小鸟

按`p`暂停游戏

# 游戏预览

<img src="demo.gif" style="zoom: 75%;" />

