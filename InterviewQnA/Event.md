
### mouse
1. mouseenter：当鼠标**进入**元素区域内
2. mouseleave：当鼠标**离开**元素区域内
3. mouseover：当鼠标**进入**元素区域内，移入其子元素也会触发（其实就是会bubble冒泡触发到其根元素上）
4. mouseout：当鼠标**离开**元素区域内，移出其子元素时也会触发（其实就是会bubble冒泡触发到其根元素上）
4. mousedown：当鼠标按下
5. mousemove：当鼠标在元素上移动时，通常和mousedown/mouseup结合用来做绘图画板的功能
6. mouseup：当鼠标放出
7. click 点击完的时候
8. wheel 滚动的时候

### drag
- draggable：是枚举属性（true|false|auto），~~不是boolean~~，组件能否被拖动（拖放API）。默认情形只有对选中文本、图片、链接可以拖动，而对其他元素必须按照拖动机制的顺序设置ondragstart事件才能工作。
事件名是`on + 以下七个事件之一`
1. dragstart：开始拖动时
2. drag：拖动目标时
3. dragend：拖动结束时
4. dragenter：当可拖动元素**进入**可放置的目标时
5. dragover：当可拖动元素**在**可放置目标上移动时
6. dragleave：当可拖动元素**离开**可放置目标时
7. drop：放置目标元素时


### touch
一个或多个触屏点上有
1. touchstart：触屏点放在了屏幕上
2. touchmove：触屏点在屏幕上移动
3. touchend：触屏点操作移出屏幕
4. touchcancel：某种非正常的操作导致的触屏点操作中断（如太多点触控了）

### key
1. keydown：键盘按键往下按
2. keypress：键盘按键保持
3. keyup：键盘按键放开