import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://192.168.43.144:5000",
            changeOrigin: true,
        })
    );
}
