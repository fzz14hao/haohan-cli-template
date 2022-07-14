/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
// const dev = 'http://120.76.194.61:6500';
 const dev='http://10.9.0.11:6500'
//const dev='https://erppre.pheyma.com'
//  const dev='http://localhost:6500'

export default {
  dev: {
    '/api/': {
      target: dev,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/user/api': {
      target: dev,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/base/api': {
      target: dev,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/wh/api': {
      target: dev,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/orders/api': {
      target: dev,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/po/api': {
      // target: 'http://10.9.1.198:5045',
      target:'http://10.9.0.11:5055',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/mos/api': {
      target: dev,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/report/api': {
      target: dev,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/fi/api': {
      target: dev,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },

  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
