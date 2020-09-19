<!-- EventLoop.md -->

- 一个浏览器环境，只能有一个EventLoop
- 一个事件循环可以有多个任务队列（宏任务、微任务）

宏任务队列：（从入口开始依次）
	Timer队列、I/O队列、Immediate队列、Close队列
微任务队列：
	nextTick队列、Promise队列