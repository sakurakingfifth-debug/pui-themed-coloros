## 17.0.1.224

**CN:**

1、修复在线更新后未重启导致的误报：现在显示「模块已更新，重启后生效」，不再误报叠加层未挂载。

2、壁纸挂载：管理器已挂载时脚本不再重复 bind，避免源/目标 inode 不一致的误判。

**EN:**

1、Fix a false "overlays not fully mounted" report after an online update; the WebUI now shows "reboot to apply".

2、Wallpaper: skip the bind when the manager already mounted the file, avoiding inode mismatch false alarms.
