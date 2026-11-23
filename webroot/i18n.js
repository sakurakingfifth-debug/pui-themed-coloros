/* PUI Theme WebUI i18n. 语言包按 locale 分批写入，每个 locale 是一条完整语句，便于增量维护。 */
window.I18N = window.I18N || {};

window.I18N["zh-CN"] = {
  load: "正在读取模块信息…", refresh: "刷新", tabOv: "概览", tabList: "叠加层", tabLog: "日志",
  search: "搜索包名或应用", logEmptyTry: "（暂无日志，post-fs-data 执行后会写入）", logEmpty: "（暂无日志）",
  copyDiag: "复制诊断信息", reload: "重新读取", copyLog: "复制日志",
  note1: "因为模块会跨多个系统，所以会出现某些叠加层［资源不匹配］属于正常现象，并非模块异常。",
  note2: "而显示［目标应用未安装］则是你没有安装对应美化覆盖的APP，也属于正常现象，并非模块异常。",
  reading: "读取中", readingSub: "正在获取模块运行状态",
  okT: "整体正常", okB: "{n} 个叠加层已启用，壁纸挂载正常",
  noBridgeT: "未连接管理器", noBridgeB: "请在 KernelSU / APatch 的模块页面打开 WebUI，普通浏览器读不到设备状态",
  noModT: "找不到模块目录", noModB: "{path} 不存在，模块可能未正确安装",
  disabledT: "模块已被停用", disabledB: "目录下存在 disable 文件，所有改动不会生效",
  partialT: "叠加层未完全挂载", partialB: "系统只看到 {v} / {t} 个 overlay APK，重启或检查管理器挂载",
  noOvlT: "系统未看到叠加层", noOvlB: "/product/overlay 下没有找到本模块的 APK，确认模块已启用并重启",
  unavailT: "{n} 个叠加层未生效", unavailBAll: "目标应用未安装，或资源在 OS17 上已变更，这些图标不会被替换",
  missN: "{n} 个目标应用未安装", mismN: "{n} 个资源不匹配",
  offT: "{n} 个叠加层被关闭", offB: "在「叠加层」页可查看具体项",
  unlistedT: "{n} 个叠加层未被系统识别", unlistedB: "系统 overlay 列表里找不到这些包，APK 可能没有真正挂载",
  wallT: "壁纸未挂载", wallB: "源文件与系统文件的 inode 不一致，bind 挂载可能失败，查看日志",
  permT: "SELinux 处于宽容模式", permB: "不建议长期保持，会影响可读的诊断结果",
  cOvl: "图标叠加层", allOn: "全部已启用", someOff: "有未启用项", cantRead: "无法读取 overlay 列表", nInactive: "{n} 个未生效",
  cWall: "壁纸挂载", mounted: "已挂载", notMounted: "未挂载",
  cMod: "模块", mOn: "已启用", mOff: "已停用", cEnv: "运行环境",
  rId: "模块 id", rPath: "安装路径", rApkMod: "模块内 APK", rApkVfs: "系统可见 APK",
  rEnabled: "已启用叠加层", rInactive: "未生效叠加层", rWallSrc: "壁纸源", rWallCtx: "壁纸上下文",
  rWallFile: "系统壁纸文件", rBind: "bind 挂载", rKernel: "内核", rRom: "系统版本",
  vCount: "{n} 个", vNotDet: "未检测到", vNoList: "未读取到列表", vNone: "无", vMissing: "缺失",
  vExist: "存在", vNoExist: "不存在", vBindOk: "生效（inode 一致）", vBindNo: "未生效",
  vUnavail: "{n} 个（未安装 {m} / 不匹配 {k}）",
  lOff: "已关闭", lMissing: "未安装", lMismatch: "不匹配",
  emptySearch: "没有匹配的叠加层", emptyList: "未读取到叠加层列表",
  copied: "已复制", copyFail: "复制失败",
  dId: "模块 id", dDev: "设备", dKernel: "内核", dManager: "管理器", dOverlay: "叠加层", dWall: "壁纸", dLog: "---- 日志 ----",
  dOverlayVal: "{a}/{b} 启用，{c} 个未生效，系统可见 {d} 个 APK（模块内 {e}）",
  dWallVal: "{state} · {label} · {size} bytes",
  langLabel: "语言", langAuto: "跟随系统", status: "状态",
  mgrUnknown: "未知管理器", mgrNone: "未连接",
  noBridgeTitle: "当前环境没有 root 桥接", noBridgeBody: "请在本模块的 WebUI 入口打开（KernelSU / APatch），浏览器里只能看到界面框架。",
  failTitle: "读取失败", failBody: "命令没有返回模块信息，请确认模块已安装并授权 root。"
};

window.I18N["en"] = {
  load: "Loading module info…", refresh: "Refresh", tabOv: "Overview", tabList: "Overlays", tabLog: "Log",
  search: "Search package or app", logEmptyTry: "(No log yet, written after post-fs-data)", logEmpty: "(No log)",
  copyDiag: "Copy diagnostics", reload: "Reload", copyLog: "Copy log",
  note1: "The module targets several systems, so some overlays may report ［resource mismatch］. That is normal, not a module fault.",
  note2: "［Target app not installed］ means the app that overlay themes is not installed here. That is normal too.",
  reading: "Reading", readingSub: "Fetching module status",
  okT: "All good", okB: "{n} overlays enabled, wallpaper mounted",
  noBridgeT: "No manager connection", noBridgeB: "Open this WebUI from the module page in KernelSU / APatch. A normal browser cannot read device state.",
  noModT: "Module folder not found", noModB: "{path} does not exist; the module may not be installed correctly.",
  disabledT: "Module is disabled", disabledB: "A disable file exists in the module folder, so nothing takes effect.",
  partialT: "Overlays not fully mounted", partialB: "System sees only {v} / {t} overlay APKs. Reboot or check the manager mount.",
  noOvlT: "System cannot see overlays", noOvlB: "No module APK found under /product/overlay. Make sure the module is enabled and reboot.",
  unavailT: "{n} overlays inactive", unavailBAll: "Target app not installed, or the resource changed on OS17. These icons will not be replaced.",
  missN: "{n} target apps not installed", mismN: "{n} resource mismatches",
  offT: "{n} overlays turned off", offB: "See the Overlays tab for details.",
  unlistedT: "{n} overlays not recognized", unlistedB: "These packages are missing from the system overlay list; the APKs may not be mounted.",
  wallT: "Wallpaper not mounted", wallB: "Source and system file have different inodes. The bind mount may have failed; check the log.",
  permT: "SELinux is permissive", permB: "Not recommended long term; it affects diagnostics.",
  cOvl: "Icon overlays", allOn: "All enabled", someOff: "Some disabled", cantRead: "Cannot read overlay list", nInactive: "{n} inactive",
  cWall: "Wallpaper", mounted: "Mounted", notMounted: "Not mounted",
  cMod: "Module", mOn: "Enabled", mOff: "Disabled", cEnv: "Environment",
  rId: "Module id", rPath: "Install path", rApkMod: "APKs in module", rApkVfs: "APKs visible to system",
  rEnabled: "Enabled overlays", rInactive: "Inactive overlays", rWallSrc: "Wallpaper source", rWallCtx: "Wallpaper context",
  rWallFile: "System wallpaper file", rBind: "Bind mount", rKernel: "Kernel", rRom: "System build",
  vCount: "{n}", vNotDet: "not detected", vNoList: "no list", vNone: "none", vMissing: "missing",
  vExist: "present", vNoExist: "absent", vBindOk: "active (same inode)", vBindNo: "inactive",
  vUnavail: "{n} ({m} not installed / {k} mismatch)",
  lOff: "off", lMissing: "not installed", lMismatch: "mismatch",
  emptySearch: "No matching overlays", emptyList: "No overlay list available",
  copied: "Copied", copyFail: "Copy failed",
  dId: "Module id", dDev: "Device", dKernel: "Kernel", dManager: "Manager", dOverlay: "Overlays", dWall: "Wallpaper", dLog: "---- Log ----",
  dOverlayVal: "{a}/{b} enabled, {c} inactive, {d} APKs visible ({e} in module)",
  dWallVal: "{state} · {label} · {size} bytes",
  langLabel: "Language", langAuto: "Follow system", status: "Status",
  mgrUnknown: "Unknown manager", mgrNone: "Not connected",
  noBridgeTitle: "No root bridge here", noBridgeBody: "Open the WebUI from the module page (KernelSU / APatch). A browser can only show the layout.",
  failTitle: "Read failed", failBody: "The command returned no module info. Make sure the module is installed and root is granted."
};

window.I18N["ru"] = {
  load: "Загрузка данных модуля…", refresh: "Обновить", tabOv: "Обзор", tabList: "Оверлеи", tabLog: "Журнал",
  search: "Поиск пакета или приложения", logEmptyTry: "(Журнала пока нет, он появится после post-fs-data)", logEmpty: "(Журнал пуст)",
  copyDiag: "Копировать диагностику", reload: "Перечитать", copyLog: "Копировать журнал",
  note1: "Модуль рассчитан на несколько систем, поэтому у части оверлеев возможен ［конфликт ресурсов］. Это нормально, а не ошибка модуля.",
  note2: "［Целевое приложение не установлено］ означает, что приложения, для которого сделан оверлей, нет на устройстве. Это тоже нормально.",
  reading: "Чтение", readingSub: "Получение состояния модуля",
  okT: "Всё в порядке", okB: "Оверлеев включено: {n}, обои смонтированы",
  noBridgeT: "Нет связи с менеджером", noBridgeB: "Откройте WebUI со страницы модуля в KernelSU / APatch. Обычный браузер не читает состояние устройства.",
  noModT: "Каталог модуля не найден", noModB: "{path} не существует; модуль установлен некорректно.",
  disabledT: "Модуль отключён", disabledB: "В каталоге есть файл disable, поэтому изменения не применяются.",
  partialT: "Оверлеи смонтированы не полностью", partialB: "Система видит только {v} / {t} APK оверлеев. Перезагрузитесь или проверьте монтирование.",
  noOvlT: "Система не видит оверлеи", noOvlB: "В /product/overlay нет APK модуля. Убедитесь, что модуль включён, и перезагрузитесь.",
  unavailT: "Неактивных оверлеев: {n}", unavailBAll: "Целевое приложение не установлено или ресурс изменился в OS17. Эти значки не будут заменены.",
  missN: "Не установлено приложений: {n}", mismN: "Несовпадений ресурсов: {n}",
  offT: "Отключено оверлеев: {n}", offB: "Подробности на вкладке «Оверлеи».",
  unlistedT: "Система не распознала оверлеев: {n}", unlistedB: "Этих пакетов нет в системном списке оверлеев; возможно, APK не смонтированы.",
  wallT: "Обои не смонтированы", wallB: "У исходного и системного файла разные inode. Возможно, bind-монтирование не удалось; смотрите журнал.",
  permT: "SELinux в режиме permissive", permB: "Не рекомендуется постоянно; влияет на диагностику.",
  cOvl: "Оверлеи значков", allOn: "Все включены", someOff: "Есть отключённые", cantRead: "Список оверлеев недоступен", nInactive: "Неактивных: {n}",
  cWall: "Обои", mounted: "Смонтированы", notMounted: "Не смонтированы",
  cMod: "Модуль", mOn: "Включён", mOff: "Отключён", cEnv: "Среда",
  rId: "ID модуля", rPath: "Путь установки", rApkMod: "APK в модуле", rApkVfs: "APK для системы",
  rEnabled: "Включённые оверлеи", rInactive: "Неактивные оверлеи", rWallSrc: "Источник обоев", rWallCtx: "Контекст обоев",
  rWallFile: "Системный файл обоев", rBind: "Bind-монтирование", rKernel: "Ядро", rRom: "Сборка системы",
  vCount: "{n} шт.", vNotDet: "не обнаружено", vNoList: "список пуст", vNone: "нет", vMissing: "отсутствует",
  vExist: "есть", vNoExist: "нет", vBindOk: "активно (inode совпадает)", vBindNo: "неактивно",
  vUnavail: "{n} (не установлено {m} / несовпадений {k})",
  lOff: "выкл.", lMissing: "не установлено", lMismatch: "несовпадение",
  emptySearch: "Нет подходящих оверлеев", emptyList: "Список оверлеев недоступен",
  copied: "Скопировано", copyFail: "Не удалось скопировать",
  dId: "ID модуля", dDev: "Устройство", dKernel: "Ядро", dManager: "Менеджер", dOverlay: "Оверлеи", dWall: "Обои", dLog: "---- Журнал ----",
  dOverlayVal: "{a}/{b} включено, неактивных {c}, система видит {d} APK (в модуле {e})",
  dWallVal: "{state} · {label} · {size} байт",
  langLabel: "Язык", langAuto: "Как в системе", status: "Состояние",
  mgrUnknown: "Неизвестный менеджер", mgrNone: "Нет связи",
  noBridgeTitle: "Нет root-моста", noBridgeBody: "Откройте WebUI со страницы модуля (KernelSU / APatch). В браузере виден только макет.",
  failTitle: "Ошибка чтения", failBody: "Команда не вернула данные модуля. Проверьте установку и права root."
};

window.I18N["zh-TW"] = {
  load: "正在讀取模組資訊…", refresh: "重新整理", tabOv: "概覽", tabList: "疊加層", tabLog: "記錄",
  search: "搜尋套件或應用程式", logEmptyTry: "（尚無記錄，post-fs-data 執行後會寫入）", logEmpty: "（尚無記錄）",
  copyDiag: "複製診斷資訊", reload: "重新讀取", copyLog: "複製記錄",
  note1: "因為模組會跨多個系統，所以會出現某些疊加層［資源不相符］屬於正常現象，並非模組異常。",
  note2: "而顯示［目標應用程式未安裝］則是您沒有安裝對應美化覆蓋的APP，也屬於正常現象，並非模組異常。",
  reading: "讀取中", readingSub: "正在取得模組執行狀態",
  okT: "整體正常", okB: "{n} 個疊加層已啟用，桌布掛載正常",
  noBridgeT: "未連線管理程式", noBridgeB: "請在 KernelSU / APatch 的模組頁面開啟 WebUI，一般瀏覽器讀不到裝置狀態",
  noModT: "找不到模組目錄", noModB: "{path} 不存在，模組可能未正確安裝",
  disabledT: "模組已停用", disabledB: "目錄下有 disable 檔案，所有變更都不會生效",
  partialT: "疊加層未完整掛載", partialB: "系統只看到 {v} / {t} 個 overlay APK，請重新開機或檢查管理程式掛載",
  noOvlT: "系統看不到疊加層", noOvlB: "/product/overlay 下找不到本模組的 APK，請確認模組已啟用並重新開機",
  unavailT: "{n} 個疊加層未生效", unavailBAll: "目標應用程式未安裝，或資源在 OS17 上已變更，這些圖示不會被替換",
  missN: "{n} 個目標應用程式未安裝", mismN: "{n} 個資源不相符",
  offT: "{n} 個疊加層已關閉", offB: "在「疊加層」頁可查看詳細項目",
  unlistedT: "{n} 個疊加層未被系統辨識", unlistedB: "系統 overlay 清單裡找不到這些套件，APK 可能沒有真正掛載",
  wallT: "桌布未掛載", wallB: "來源檔案與系統檔案的 inode 不一致，bind 掛載可能失敗，請查看記錄",
  permT: "SELinux 處於寬容模式", permB: "不建議長期維持，會影響診斷結果",
  cOvl: "圖示疊加層", allOn: "全部已啟用", someOff: "有未啟用項目", cantRead: "無法讀取 overlay 清單", nInactive: "{n} 個未生效",
  cWall: "桌布掛載", mounted: "已掛載", notMounted: "未掛載",
  cMod: "模組", mOn: "已啟用", mOff: "已停用", cEnv: "執行環境",
  rId: "模組 id", rPath: "安裝路徑", rApkMod: "模組內 APK", rApkVfs: "系統可見 APK",
  rEnabled: "已啟用疊加層", rInactive: "未生效疊加層", rWallSrc: "桌布來源", rWallCtx: "桌布內容脈絡",
  rWallFile: "系統桌布檔案", rBind: "bind 掛載", rKernel: "核心", rRom: "系統版本",
  vCount: "{n} 個", vNotDet: "未偵測到", vNoList: "未讀取到清單", vNone: "無", vMissing: "缺少",
  vExist: "存在", vNoExist: "不存在", vBindOk: "生效（inode 一致）", vBindNo: "未生效",
  vUnavail: "{n} 個（未安裝 {m} / 不相符 {k}）",
  lOff: "已關閉", lMissing: "未安裝", lMismatch: "不相符",
  emptySearch: "沒有符合的疊加層", emptyList: "未讀取到疊加層清單",
  copied: "已複製", copyFail: "複製失敗",
  dId: "模組 id", dDev: "裝置", dKernel: "核心", dManager: "管理程式", dOverlay: "疊加層", dWall: "桌布", dLog: "---- 記錄 ----",
  dOverlayVal: "{a}/{b} 啟用，{c} 個未生效，系統可見 {d} 個 APK（模組內 {e}）",
  dWallVal: "{state} · {label} · {size} bytes",
  langLabel: "語言", langAuto: "跟隨系統", status: "狀態",
  mgrUnknown: "未知管理程式", mgrNone: "未連線",
  noBridgeTitle: "目前環境沒有 root 橋接", noBridgeBody: "請在本模組的 WebUI 入口開啟（KernelSU / APatch），瀏覽器裡只能看到介面框架。",
  failTitle: "讀取失敗", failBody: "指令沒有傳回模組資訊，請確認模組已安裝並授權 root。"
};

window.I18N["zh-HK"] = {
  load: "正在讀取模組資料…", refresh: "重新整理", tabOv: "概覽", tabList: "疊加層", tabLog: "日誌",
  search: "搜尋套件或應用程式", logEmptyTry: "（暫無日誌，post-fs-data 執行後會寫入）", logEmpty: "（暫無日誌）",
  copyDiag: "複製診斷資料", reload: "重新讀取", copyLog: "複製日誌",
  note1: "因為模組會跨多個系統，所以會出現某些疊加層［資源不相符］屬於正常現象，並非模組異常。",
  note2: "而顯示［目標應用程式未安裝］則是你沒有安裝對應美化覆蓋的APP，也屬於正常現象，並非模組異常。",
  reading: "讀取中", readingSub: "正在取得模組運作狀態",
  okT: "整體正常", okB: "{n} 個疊加層已啟用，桌布掛載正常",
  noBridgeT: "未連接管理程式", noBridgeB: "請在 KernelSU / APatch 的模組頁面開啟 WebUI，普通瀏覽器讀不到裝置狀態",
  noModT: "找不到模組目錄", noModB: "{path} 不存在，模組可能未正確安裝",
  disabledT: "模組已停用", disabledB: "目錄下有 disable 檔案，所有改動都不會生效",
  partialT: "疊加層未完全掛載", partialB: "系統只看到 {v} / {t} 個 overlay APK，請重新開機或檢查管理程式掛載",
  noOvlT: "系統看不到疊加層", noOvlB: "/product/overlay 下找不到本模組的 APK，請確認模組已啟用並重新開機",
  unavailT: "{n} 個疊加層未生效", unavailBAll: "目標應用程式未安裝，或資源在 OS17 上已變更，這些圖示不會被替換",
  missN: "{n} 個目標應用程式未安裝", mismN: "{n} 個資源不相符",
  offT: "{n} 個疊加層已關閉", offB: "在「疊加層」頁可查看具體項目",
  unlistedT: "{n} 個疊加層未被系統辨識", unlistedB: "系統 overlay 清單裡找不到這些套件，APK 可能沒有真正掛載",
  wallT: "桌布未掛載", wallB: "來源檔案與系統檔案的 inode 不一致，bind 掛載可能失敗，請查看日誌",
  permT: "SELinux 處於寬容模式", permB: "不建議長期保持，會影響診斷結果",
  cOvl: "圖示疊加層", allOn: "全部已啟用", someOff: "有未啟用項目", cantRead: "無法讀取 overlay 清單", nInactive: "{n} 個未生效",
  cWall: "桌布掛載", mounted: "已掛載", notMounted: "未掛載",
  cMod: "模組", mOn: "已啟用", mOff: "已停用", cEnv: "運作環境",
  rId: "模組 id", rPath: "安裝路徑", rApkMod: "模組內 APK", rApkVfs: "系統可見 APK",
  rEnabled: "已啟用疊加層", rInactive: "未生效疊加層", rWallSrc: "桌布來源", rWallCtx: "桌布內容脈絡",
  rWallFile: "系統桌布檔案", rBind: "bind 掛載", rKernel: "核心", rRom: "系統版本",
  vCount: "{n} 個", vNotDet: "未偵測到", vNoList: "未讀取到清單", vNone: "無", vMissing: "缺少",
  vExist: "存在", vNoExist: "不存在", vBindOk: "生效（inode 一致）", vBindNo: "未生效",
  vUnavail: "{n} 個（未安裝 {m} / 不相符 {k}）",
  lOff: "已關閉", lMissing: "未安裝", lMismatch: "不相符",
  emptySearch: "沒有符合的疊加層", emptyList: "未讀取到疊加層清單",
  copied: "已複製", copyFail: "複製失敗",
  dId: "模組 id", dDev: "裝置", dKernel: "核心", dManager: "管理程式", dOverlay: "疊加層", dWall: "桌布", dLog: "---- 日誌 ----",
  dOverlayVal: "{a}/{b} 啟用，{c} 個未生效，系統可見 {d} 個 APK（模組內 {e}）",
  dWallVal: "{state} · {label} · {size} bytes",
  langLabel: "語言", langAuto: "跟隨系統", status: "狀態",
  mgrUnknown: "未知管理程式", mgrNone: "未連接",
  noBridgeTitle: "目前環境沒有 root 橋接", noBridgeBody: "請在本模組的 WebUI 入口開啟（KernelSU / APatch），瀏覽器裡只能看到介面框架。",
  failTitle: "讀取失敗", failBody: "指令沒有傳回模組資料，請確認模組已安裝並授權 root。"
};

window.I18N["yue-CN"] = {
  load: "正在读取模块资料…", refresh: "刷新", tabOv: "概览", tabList: "叠加层", tabLog: "日志",
  search: "搜包名或者应用", logEmptyTry: "（暂时冇日志，post-fs-data 行完之后会写）", logEmpty: "（暂时冇日志）",
  copyDiag: "复制诊断资料", reload: "重新读取", copyLog: "复制日志",
  note1: "因为模块会跨多个系统，所以会出现某些叠加层［资源唔匹配］都系正常嘅，唔系模块出错。",
  note2: "而显示［目标应用未安装］就系你冇装对应美化覆盖嘅APP，都系正常嘅，唔系模块出错。",
  reading: "读取中", readingSub: "正在攞模块运行状态",
  okT: "一切正常", okB: "{n} 个叠加层已经启用，壁纸挂载正常",
  noBridgeT: "未连接管理器", noBridgeB: "请喺 KernelSU / APatch 嘅模块页面打开 WebUI，普通浏览器读唔到装置状态",
  noModT: "搵唔到模块目录", noModB: "{path} 唔存在，模块可能未装好",
  disabledT: "模块已经停用", disabledB: "目录入面有 disable 文件，所有改动都唔会生效",
  partialT: "叠加层未完全挂载", partialB: "系统净系见到 {v} / {t} 个 overlay APK，重启或者检查管理器挂载",
  noOvlT: "系统见唔到叠加层", noOvlB: "/product/overlay 揾唔到本模块嘅 APK，确认模块已启用再重启",
  unavailT: "{n} 个叠加层未生效", unavailBAll: "目标应用未安装，或者资源喺 OS17 已经改咗，呢啲图标唔会被替换",
  missN: "{n} 个目标应用未安装", mismN: "{n} 个资源唔匹配",
  offT: "{n} 个叠加层已关闭", offB: "喺「叠加层」页可以睇具体项",
  unlistedT: "{n} 个叠加层未被系统识别", unlistedB: "系统 overlay 列表揾唔到呢啲包，APK 可能未真正挂载",
  wallT: "壁纸未挂载", wallB: "来源文件同系统文件嘅 inode 唔一致，bind 挂载可能失败，睇下日志",
  permT: "SELinux 处于宽容模式", permB: "唔建议长期保持，会影响诊断结果",
  cOvl: "图标叠加层", allOn: "全部已启用", someOff: "有未启用项", cantRead: "读唔到 overlay 列表", nInactive: "{n} 个未生效",
  cWall: "壁纸挂载", mounted: "已挂载", notMounted: "未挂载",
  cMod: "模块", mOn: "已启用", mOff: "已停用", cEnv: "运行环境",
  rId: "模块 id", rPath: "安装路径", rApkMod: "模块内 APK", rApkVfs: "系统见到嘅 APK",
  rEnabled: "已启用叠加层", rInactive: "未生效叠加层", rWallSrc: "壁纸来源", rWallCtx: "壁纸上下文",
  rWallFile: "系统壁纸文件", rBind: "bind 挂载", rKernel: "内核", rRom: "系统版本",
  vCount: "{n} 个", vNotDet: "未检测到", vNoList: "未读取到列表", vNone: "冇", vMissing: "缺失",
  vExist: "存在", vNoExist: "唔存在", vBindOk: "生效（inode 一致）", vBindNo: "未生效",
  vUnavail: "{n} 个（未安装 {m} / 唔匹配 {k}）",
  lOff: "已关闭", lMissing: "未安装", lMismatch: "唔匹配",
  emptySearch: "冇符合嘅叠加层", emptyList: "未读取到叠加层列表",
  copied: "已复制", copyFail: "复制失败",
  dId: "模块 id", dDev: "设备", dKernel: "内核", dManager: "管理器", dOverlay: "叠加层", dWall: "壁纸", dLog: "---- 日志 ----",
  dOverlayVal: "{a}/{b} 启用，{c} 个未生效，系统见到 {d} 个 APK（模块内 {e}）",
  dWallVal: "{state} · {label} · {size} bytes",
  langLabel: "语言", langAuto: "跟随系统", status: "状态",
  mgrUnknown: "未知管理器", mgrNone: "未连接",
  noBridgeTitle: "而家环境冇 root 桥接", noBridgeBody: "请喺本模块嘅 WebUI 入口打开（KernelSU / APatch），浏览器入面净系见到界面框架。",
  failTitle: "读取失败", failBody: "指令冇返模块资料，请确认模块已装好并授权 root。"
};

window.I18N["yue-HK"] = {
  load: "正在讀取模組資料…", refresh: "重新整理", tabOv: "概覽", tabList: "疊加層", tabLog: "日誌",
  search: "搵套件或者應用", logEmptyTry: "（暫時未有日誌，post-fs-data 行完之後會寫）", logEmpty: "（暫時未有日誌）",
  copyDiag: "複製診斷資料", reload: "重新讀取", copyLog: "複製日誌",
  note1: "因為模組會跨多個系統，所以會出現某些疊加層［資源唔匹配］都係正常嘅，唔係模組出錯。",
  note2: "而顯示［目標應用未安裝］就係你冇裝對應美化覆蓋嘅APP，都係正常嘅，唔係模組出錯。",
  reading: "讀取中", readingSub: "正在攞模組運作狀態",
  okT: "一切正常", okB: "{n} 個疊加層已經啟用，桌布掛載正常",
  noBridgeT: "未連接管理程式", noBridgeB: "請喺 KernelSU / APatch 嘅模組頁面打開 WebUI，普通瀏覽器讀唔到裝置狀態",
  noModT: "搵唔到模組目錄", noModB: "{path} 唔存在，模組可能未裝好",
  disabledT: "模組已經停用", disabledB: "目錄入面有 disable 檔案，所有改動都唔會生效",
  partialT: "疊加層未完全掛載", partialB: "系統淨係見到 {v} / {t} 個 overlay APK，重開機或者檢查管理程式掛載",
  noOvlT: "系統見唔到疊加層", noOvlB: "/product/overlay 搵唔到本模組嘅 APK，確認模組已啟用再重開機",
  unavailT: "{n} 個疊加層未生效", unavailBAll: "目標應用未安裝，或者資源喺 OS17 已經改咗，呢啲圖示唔會被替換",
  missN: "{n} 個目標應用未安裝", mismN: "{n} 個資源唔匹配",
  offT: "{n} 個疊加層已關閉", offB: "喺「疊加層」頁可以睇具體項目",
  unlistedT: "{n} 個疊加層未被系統辨識", unlistedB: "系統 overlay 清單搵唔到呢啲套件，APK 可能未真正掛載",
  wallT: "桌布未掛載", wallB: "來源檔案同系統檔案嘅 inode 唔一致，bind 掛載可能失敗，睇下日誌",
  permT: "SELinux 處於寬容模式", permB: "唔建議長期保持，會影響診斷結果",
  cOvl: "圖示疊加層", allOn: "全部已啟用", someOff: "有未啟用項目", cantRead: "讀唔到 overlay 清單", nInactive: "{n} 個未生效",
  cWall: "桌布掛載", mounted: "已掛載", notMounted: "未掛載",
  cMod: "模組", mOn: "已啟用", mOff: "已停用", cEnv: "運作環境",
  rId: "模組 id", rPath: "安裝路徑", rApkMod: "模組內 APK", rApkVfs: "系統見到嘅 APK",
  rEnabled: "已啟用疊加層", rInactive: "未生效疊加層", rWallSrc: "桌布來源", rWallCtx: "桌布內容脈絡",
  rWallFile: "系統桌布檔案", rBind: "bind 掛載", rKernel: "核心", rRom: "系統版本",
  vCount: "{n} 個", vNotDet: "未偵測到", vNoList: "未讀取到清單", vNone: "冇", vMissing: "缺少",
  vExist: "存在", vNoExist: "唔存在", vBindOk: "生效（inode 一致）", vBindNo: "未生效",
  vUnavail: "{n} 個（未安裝 {m} / 唔匹配 {k}）",
  lOff: "已關閉", lMissing: "未安裝", lMismatch: "唔匹配",
  emptySearch: "冇符合嘅疊加層", emptyList: "未讀取到疊加層清單",
  copied: "已複製", copyFail: "複製失敗",
  dId: "模組 id", dDev: "裝置", dKernel: "核心", dManager: "管理程式", dOverlay: "疊加層", dWall: "桌布", dLog: "---- 日誌 ----",
  dOverlayVal: "{a}/{b} 啟用，{c} 個未生效，系統見到 {d} 個 APK（模組內 {e}）",
  dWallVal: "{state} · {label} · {size} bytes",
  langLabel: "語言", langAuto: "跟隨系統", status: "狀態",
  mgrUnknown: "未知管理程式", mgrNone: "未連接",
  noBridgeTitle: "而家環境冇 root 橋接", noBridgeBody: "請喺本模組嘅 WebUI 入口打開（KernelSU / APatch），瀏覽器入面淨係見到介面框架。",
  failTitle: "讀取失敗", failBody: "指令冇返模組資料，請確認模組已裝好並授權 root。"
};

window.I18N["ja"] = {
  load: "モジュール情報を読み込み中…", refresh: "更新", tabOv: "概要", tabList: "オーバーレイ", tabLog: "ログ",
  search: "パッケージまたはアプリを検索", logEmptyTry: "（ログはまだありません。post-fs-data 実行後に書き込まれます）", logEmpty: "（ログなし）",
  copyDiag: "診断情報をコピー", reload: "再読み込み", copyLog: "ログをコピー",
  note1: "モジュールは複数のシステムに対応しているため、一部のオーバーレイで［リソース不一致］が起きます。これは正常で、モジュールの不具合ではありません。",
  note2: "［対象アプリ未インストール］は、そのオーバーレイが対象とするアプリが入っていないだけです。これも正常です。",
  reading: "読み込み中", readingSub: "モジュールの状態を取得しています",
  okT: "問題なし", okB: "オーバーレイ {n} 件が有効、壁紙もマウント済み",
  noBridgeT: "マネージャー未接続", noBridgeB: "KernelSU / APatch のモジュール画面から WebUI を開いてください。通常のブラウザでは端末の状態を取得できません。",
  noModT: "モジュールフォルダが見つかりません", noModB: "{path} が存在しません。モジュールが正しく入っていない可能性があります。",
  disabledT: "モジュールは無効です", disabledB: "フォルダに disable ファイルがあるため、変更は反映されません。",
  partialT: "オーバーレイが一部マウントされていません", partialB: "システムからは {v} / {t} 個の overlay APK しか見えていません。再起動するかマウントを確認してください。",
  noOvlT: "システムがオーバーレイを認識していません", noOvlB: "/product/overlay に本モジュールの APK がありません。有効化して再起動してください。",
  unavailT: "無効なオーバーレイ: {n} 件", unavailBAll: "対象アプリが未インストールか、OS17 でリソースが変更されています。これらのアイコンは置き換わりません。",
  missN: "対象アプリ未インストール: {n} 件", mismN: "リソース不一致: {n} 件",
  offT: "無効化されたオーバーレイ: {n} 件", offB: "「オーバーレイ」タブで確認できます。",
  unlistedT: "システム未認識のオーバーレイ: {n} 件", unlistedB: "システムのオーバーレイ一覧にこれらのパッケージがありません。APK がマウントされていない可能性があります。",
  wallT: "壁紙がマウントされていません", wallB: "元ファイルとシステム側ファイルの inode が一致しません。bind マウントに失敗した可能性があります。ログを確認してください。",
  permT: "SELinux が permissive です", permB: "長期使用は非推奨です。診断結果に影響します。",
  cOvl: "アイコンオーバーレイ", allOn: "すべて有効", someOff: "無効あり", cantRead: "overlay 一覧を取得できません", nInactive: "無効 {n} 件",
  cWall: "壁紙", mounted: "マウント済み", notMounted: "未マウント",
  cMod: "モジュール", mOn: "有効", mOff: "無効", cEnv: "実行環境",
  rId: "モジュール id", rPath: "インストール先", rApkMod: "モジュール内 APK", rApkVfs: "システム認識 APK",
  rEnabled: "有効なオーバーレイ", rInactive: "無効なオーバーレイ", rWallSrc: "壁紙の元ファイル", rWallCtx: "壁紙のコンテキスト",
  rWallFile: "システム壁紙ファイル", rBind: "bind マウント", rKernel: "カーネル", rRom: "システムビルド",
  vCount: "{n} 件", vNotDet: "未検出", vNoList: "取得できず", vNone: "なし", vMissing: "なし",
  vExist: "あり", vNoExist: "なし", vBindOk: "有効（inode 一致）", vBindNo: "無効",
  vUnavail: "{n} 件（未インストール {m} / 不一致 {k}）",
  lOff: "オフ", lMissing: "未インストール", lMismatch: "不一致",
  emptySearch: "該当なし", emptyList: "overlay 一覧を取得できません",
  copied: "コピーしました", copyFail: "コピー失敗",
  dId: "モジュール id", dDev: "端末", dKernel: "カーネル", dManager: "マネージャー", dOverlay: "オーバーレイ", dWall: "壁紙", dLog: "---- ログ ----",
  dOverlayVal: "{a}/{b} 有効、無効 {c} 件、システム認識 {d} APK（モジュール内 {e}）",
  dWallVal: "{state} · {label} · {size} バイト",
  langLabel: "言語", langAuto: "システムに従う", status: "状態",
  mgrUnknown: "不明なマネージャー", mgrNone: "未接続",
  noBridgeTitle: "root ブリッジがありません", noBridgeBody: "モジュール画面（KernelSU / APatch）から WebUI を開いてください。ブラウザではレイアウトのみ表示されます。",
  failTitle: "読み込み失敗", failBody: "コマンドがモジュール情報を返しませんでした。インストールと root 権限を確認してください。"
};

(function () {
  const D = window.I18N;
  const sysTag = (navigator.languages && navigator.languages[0]) || navigator.language || "en";

  function pick(tag) {
    const raw = String(tag || "").replace(/_/g, "-");
    const low = raw.toLowerCase();
    const parts = low.split("-");
    const head = parts[0];
    if (head === "yue") return (parts.indexOf("cn") >= 0) ? "yue-CN" : "yue-HK";
    if (head === "zh") {
      if (parts.indexOf("hant") >= 0) return "zh-TW";
      if (parts.indexOf("hk") >= 0 || parts.indexOf("mo") >= 0) return "zh-HK";
      if (parts.indexOf("tw") >= 0) return "zh-TW";
      return "zh-CN";
    }
    if (head === "ru") return "ru";
    if (head === "ja") return "ja";
    if (head === "en") return "en";
    return "en";
  }

  let mode = "auto";
  try { const saved = localStorage.getItem("pui_lang"); if (saved) mode = saved; } catch (e) {}

  window.PUI_LANGS = [
    ["auto", "langAuto"], ["zh-CN", "简体中文"], ["zh-TW", "繁體中文（台灣）"], ["zh-HK", "繁體中文（香港）"],
    ["yue-CN", "粤语（中国）"], ["yue-HK", "粵語（香港）"], ["ja", "日本語"], ["ru", "Русский"], ["en", "English"]
  ];
  window.i18nMode = function () { return mode; };
  window.i18nCurrent = function () { return mode === "auto" ? pick(sysTag) : mode; };
  window.setLang = function (v) {
    mode = v;
    try { localStorage.setItem("pui_lang", v); } catch (e) {}
  };
  window.t = function (key, vars) {
    const loc = window.i18nCurrent();
    const dict = D[loc] || D["zh-CN"];
    let s = dict[key];
    if (s == null) s = D["zh-CN"][key];
    if (s == null) s = key;
    if (vars) for (const k in vars) s = s.split("{" + k + "}").join(vars[k]);
    return s;
  };
})();
