import { configure } from 'mobx'

// mobx 配置项 （单个文件中可再次修改）
configure({
  enforceActions: "never",
  // useProxies: "never",
})