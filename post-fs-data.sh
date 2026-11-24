#!/system/bin/sh
# PUI Theme For ColorOS 17 - 替换系统动态壁纸
#
# 关键：壁纸必须先复制到 /data/adb/pui_theme 再从那里 bind。
# 直接从模块目录（/data/adb/modules/xxx）bind 会把模块目录“钉住”，
# 导致 KernelSU 在应用模块更新时 rename/删除模块目录报 EBUSY，
# 软重启时模块会直接消失（handle updated modules failed: os error 16）。
MODDIR=${0%/*}
LOG=/data/local/tmp/pui_theme.log
STORE=/data/adb/pui_theme
NAME=ColorOS1506.mp4
SRC="$MODDIR/my_product/decouping_wallpaper/common/wallpaper_group/00_ColorOS15/$NAME"
COPY="$STORE/$NAME"
DST="/my_product/decouping_wallpaper/common/wallpaper_group/00_ColorOS15/$NAME"

echo "boot+$(cut -d' ' -f1 /proc/uptime)s ---- " >> "$LOG"

# 清理历史版本留下的、指向模块目录的旧挂载
if grep -q "modules/PUIThemeCustomized.*$NAME" /proc/mounts 2>/dev/null && [ -f "$DST" ]; then
    umount "$DST" 2>/dev/null && echo "已清理指向模块目录的旧挂载" >> "$LOG"
fi

[ -f "$DST" ] || { echo "目标不存在，ColorOS 版本路径可能已变: $DST" >> "$LOG"; exit 0; }

mkdir -p "$STORE" 2>/dev/null
if [ ! -f "$COPY" ] || [ "$(stat -c %s "$COPY" 2>/dev/null)" != "$(stat -c %s "$SRC" 2>/dev/null)" ]; then
    cp -f "$SRC" "$COPY" 2>/dev/null
fi

if [ ! -s "$COPY" ]; then
    echo "壁纸复制失败（不回落模块目录，避免 EBUSY）" >> "$LOG"
    exit 0
fi

# /data 下的文件默认是 adb_data_file 上下文，系统壁纸服务读不到，必须改 system_file
chcon u:object_r:system_file:s0 "$COPY" 2>/dev/null
chmod 0644 "$COPY"

SRC_ID=$(stat -c %d:%i "$COPY" 2>/dev/null)
DST_ID=$(stat -c %d:%i "$DST" 2>/dev/null)
if [ -n "$SRC_ID" ] && [ "$SRC_ID" = "$DST_ID" ]; then
    echo "已由管理器挂载，跳过 bind" >> "$LOG"
    exit 0
fi

if mount --bind "$COPY" "$DST"; then
    echo "挂载成功: $DST (源 $COPY)" >> "$LOG"
else
    echo "挂载失败: $DST" >> "$LOG"
fi
