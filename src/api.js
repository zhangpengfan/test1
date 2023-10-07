import http from "./utils/axios";
export const getQrKey = () => http.get('/login/qr/key')//获取生成二维码的key
