## 17.0.1.225

**CN:**

1、修复软重启后模块从列表消失的问题：壁纸挂载源改为 `/data/adb/pui_theme`，不再占用模块目录，模块更新时不会报 EBUSY。

2、新增 `uninstall.sh`，卸载时自动清理壁纸缓存与挂载点。

**EN:**

1、Fix the module disappearing from the list after a soft restart. The wallpaper is now bind-mounted from `/data/adb/pui_theme` instead of the module folder, so module updates no longer fail with EBUSY.

2、Add `uninstall.sh` to clean up the wallpaper cache and mount point on uninstall.
