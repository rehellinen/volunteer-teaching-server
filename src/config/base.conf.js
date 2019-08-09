/**
 *  base.conf.js
 *  Create By rehellinen
 *  Create On 2018/10/26 15:07
 */
// 框架核心功能配置
export default {
  // 端口号
  PORT: 3000,
  // 地址
  HOST: '127.0.0.1',
  // 是否开启调试模式
  DEBUG: true,
  // CORS相关
  CORS: {
    // 是否允许API跨域访问
    OPEN: false,
    // 允许的方法
    METHODS: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    // Access-Control-Allow-Origin
    ORIGIN: '*',
    // Access-Control-Max-Age
    MAX_AGE: 5,
    // Access-Control-Allow-Credentials
    CREDENTIALS: true,
    // Access-Control-Expose-Headers
    EXPOSE_HEADERS: ['WWW-Authenticate', 'Server-Authorization'],
    // Access-Control-Allow-Methods
    ALLOW_HEADERS: ['Content-Type', 'Authorization', 'Accept', 'token', 'Content-Length', 'X-Requested-With']
  },
  // 是否把配置放到全局作用域（全局变量名称为：$config）
  GLOBAL_CONF: true,
  // 上传文件相关
  UPLOAD: {
    // 上传文件的根目录，upload表示/src/upload/
    UPLOAD_DIR: 'upload',
    // 上传文件的名称
    UPLOAD_NAME: 'file'
  },
  // TOKEN相关
  TOKEN: {
    // 生成token的前缀
    TOKEN_PREFIX: 'chenqixuan@github.com/rehellinen',
    // token过期时间（单位为ms）
    TOKEN_EXPIRES_IN: 7200 * 1000,
    // token的作用域
    SCOPE: {
      USER: 10,
      SUPER: 30
    }
  },
  // 数据库相关
  DATABASE: {
    // 主机
    host: '',
    // 端口号
    port: 3306,
    // 登录账户
    user: '',
    // 密码
    password: '',
    // 数据库名称
    database: '',
    // 字符集
    charset: 'utf8'
  },
  // 分页大小
  PAGE_SIZE: 15,
  // status映射
  STATUS: {
    NORMAL: 1,
    ABNORMAL: 0,
    DELETED: -1
  }
}