#!/system/bin/sh
# PUI Theme For ColorOS 17 - 替换系统动态壁纸
# 使用 $MODDIR 而非硬编码路径，兼容不同管理器的挂载点
MODDIR=${0%/*}
LOG=/data/local/tmp/pui_theme.log

SRC="$MODDIR/my_product/decouping_wallpaper/common/wallpaper_group/00_ColorOS15/ColorOS1506.mp4"
DST="/my_product/decouping_wallpaper/common/wallpaper_group/00_ColorOS15/ColorOS1506.mp4"

echo "boot+$(cut -d' ' -f1 /proc/uptime)s ---- " >> "$LOG"

[ -f "$SRC" ] || { echo "源文件缺失: $SRC" >> "$LOG"; exit 0; }
[ -f "$DST" ] || { echo "目标不存在，ColorOS 版本路径可能已变: $DST" >> "$LOG"; exit 0; }

# 关键：/data 下的文件默认是 adb_data_file 上下文，系统壁纸服务读不到，
# 必须改成 system_file 后系统应用才有权限读取
chcon u:object_r:system_file:s0 "$SRC" 2>/dev/null
chmod 0644 "$SRC"

# 若管理器（Magic Mount / 元模块）已经把这个文件挂上去了，就不要重复 bind，
# 否则会覆盖掉管理器的挂载，出现源 inode 与目标不一致的误报
SRC_ID=$(stat -c %d:%i "$SRC" 2>/dev/null)
DST_ID=$(stat -c %d:%i "$DST" 2>/dev/null)
if [ -n "$SRC_ID" ] && [ "$SRC_ID" = "$DST_ID" ]; then
    echo "已由管理器挂载，跳过 bind" >> "$LOG"
    exit 0
fi

if mount --bind "$SRC" "$DST"; then
    echo "挂载成功: $DST" >> "$LOG"
else
    echo "挂载失败: $DST" >> "$LOG"
fi
