const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://3.37.193.119',
      pathRewrite: {
        '^/api': ''
      },
      changeOrigin: true
    })
  );
}