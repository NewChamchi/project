import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://192.168.227.235:8080",
            changeOrigin: true,
        })
    );
}
