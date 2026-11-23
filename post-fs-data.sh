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

if mount --bind "$SRC" "$DST"; then
    echo "挂载成功: $DST" >> "$LOG"
else
    echo "挂载失败: $DST" >> "$LOG"
fi
