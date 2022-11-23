const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://74:8f:3c:c4:12:d3:8080",
            changeOrigin: true,
        })
    );
};
