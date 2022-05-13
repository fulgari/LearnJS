### 拖拽属性（HTML5 新增）

拖拽属性能够注册拖动事件。

- 拖动时（点击鼠标，移动，放开鼠标）：
  1）点击鼠标开始：dragstart --只在拖动开始时触发；`e.dataTransfer.setData('text/plain', <some data string>);` 设置拖动数据；`e.dataTransfer.setDragImage(<img>, <x>, <y>);` 设置拖动图像；
  2）按住鼠标拖行：drag --会一直不停触发
  3）松开鼠标结束： dragend
- 进入区域：
  1）进入时：dragenter --进入时发生的
  2）进入后：dragover --进入后在相应的区域内发生的, 默认不触发事件，需要 `preventDefault` 才能放置拖拽的数据
  3）离开：dragleave
  4）放下：drop

鼠标事件：mouseenter, mousemove(会不断触发), mouseleave, mousedown, mouseup, mouseover, mouseout, click, dbclick
