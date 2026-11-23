# ColorOS 17 For PUI Themed

ColorOS 17 的 PUI 风格美化模块，基于 Magisk / KernelSU / APatch 的 overlay 机制替换系统与应用图标、壁纸与部分界面资源。

- 模块 id：`PUIThemeCustomized`
- 模块名：PUI Theme For ColorOS 17
- 作者：天伞桜 & PanL
- 当前版本：17.0.1.218

## 安装

1. 在 KernelSU / APatch / Magisk 中刷入模块 zip 并重启
2. 模块内提供 WebUI 状态页，可查看叠加层挂载情况、系统壁纸状态与日志
3. 若出现「叠加层未生效」，多为目标应用未安装或资源在 OS17 上变更，属正常现象

## 目录结构

```
module.prop            模块信息
customize.sh           安装脚本
post-fs-data.sh        开机挂载脚本
system/product/overlay 各目标应用的 overlay APK
my_product/            壁纸等附加资源
webroot/               WebUI 状态页（支持多语言）
```

## 说明

- 所有 overlay 均为 static RRO，`priority=2000`，仅在系统重新扫描后生效，改动需重启
- WebUI 默认跟随系统语言，支持简体中文、繁體中文（台灣/香港）、粵語（中國/香港）、日本語、Русский、English
