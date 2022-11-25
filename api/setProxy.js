import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://172.20.10.5:8080",
            changeOrigin: true,
        })
    );
}
