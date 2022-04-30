### git commit -- 提交对象 包含哪些组件？

1. 父提交对象
2. 自己的唯一标识号
3. 提交者信息
4. 指定的树对象（当前项目快照）
5. 提交注释（message）

### git 中撤销文件未提交的修改，用什么命令？

- git checkout

### git 中怎么进行回滚？

- git reset：修改 head 指针指向往回指，让它回到前面一个版本，如果用 --hard 会丢失当前 commit。
- git revert：head 继续指向下一个 commit，只不过这个 commit 所做的事情和前一个 commit 的完全相反（从而实现 “revert” 的操作）
