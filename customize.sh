SKIPMOUNT=false
PROPFILE=false
POSTFSDATA=true
LATESTARTSERVICE=false

ui_print "- 正在设置模块文件权限"
set_perm_recursive $MODPATH 0 0 0755 0644
# 脚本必须可执行，否则部分管理器无法启动它们
set_perm $MODPATH/post-fs-data.sh 0 0 0755
[ -f $MODPATH/service.sh ] && set_perm $MODPATH/service.sh 0 0 0755

ui_print "- 安装完成，重启后生效"
