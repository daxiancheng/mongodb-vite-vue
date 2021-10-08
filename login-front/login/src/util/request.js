import axios from "axios";
const instance = axios.create({
    baseURL: '/lemon'
})
export const axiosPost = function (url, data) {
    return instance({
        url,
        method: 'post',
        data
    })
}

export const axiosGet = function (url, params) {
    return instance({
        url,
        method: 'get',
        params
    })
}
instance.interceptors.response.use((res) => {
    return res.data
})