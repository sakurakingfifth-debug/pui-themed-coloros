SKIPMOUNT=false
PROPFILE=false
POSTFSDATA=true
LATESTARTSERVICE=false

ui_print "- 正在设置模块文件权限"
set_perm_recursive $MODPATH 0 0 0755 0644
# 脚本必须可执行，否则部分管理器无法启动它们
set_perm $MODPATH/post-fs-data.sh 0 0 0755
[ -f $MODPATH/service.sh ] && set_perm $MODPATH/service.sh 0 0 0755

# 壁纸预置到模块目录之外：避免 bind 挂载把模块目录占住，导致后续更新报 EBUSY
WALL="$MODPATH/my_product/decouping_wallpaper/common/wallpaper_group/00_ColorOS15/ColorOS1506.mp4"
if [ -f "$WALL" ]; then
    mkdir -p /data/adb/pui_theme
    cp -f "$WALL" /data/adb/pui_theme/ColorOS1506.mp4
    chcon u:object_r:system_file:s0 /data/adb/pui_theme/ColorOS1506.mp4 2>/dev/null
    chmod 0644 /data/adb/pui_theme/ColorOS1506.mp4
    ui_print "- 壁纸已预置到 /data/adb/pui_theme"
fi

ui_print "- 安装完成，重启后生效"
