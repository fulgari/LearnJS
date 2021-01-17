### git commit -- 提交对象 包含哪些组件？
1. 父提交对象
2. 自己的唯一标识号
3. 提交者信息
4. 指定的树对象（当前项目快照）
5. 提交注释（message）

### git 中撤销文件未提交的修改，用什么命令？
- git checkout

### git 中怎么进行回滚？
- git reset：修改head的值，让它回到前面一个版本
- git revert：