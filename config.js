// 用户id
const userId = process.env.muserId || ""

// 用户token
const token = process.env.mtoken || ""

// 端口（适配 EdgeOne / Serverless）
const port = process.env.PORT || process.env.mport || 8080

// 公网访问地址
const host = process.env.mhost || ""

// 画质
// 4 蓝光(VIP)
// 3 高清
// 2 标清
const rateType = Number(process.env.mrateType || 3)

// debug
const debug = process.env.mdebug === "true"

// 访问密码
const pass = process.env.mpass || ""

// HDR
const enableHDR = process.env.menableHDR === "false" ? false : true

// H265
const enableH265 = process.env.menableH265 === "false" ? false : true

// 更新间隔（小时）
const programInfoUpdateInterval = Number(process.env.mupdateInterval || 6)

export {
  userId,
  token,
  port,
  host,
  rateType,
  debug,
  pass,
  enableHDR,
  programInfoUpdateInterval,
  enableH265
}
