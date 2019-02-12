/**
 * Created by BruceLv on 2018/1/22.
 */
import axios from 'axios'

/*axios.interceptors.request.use((config) => {
    let token = localStorage.getItem("token");
    if(window.location.href.indexOf("/login") !== -1){//登录

    }else if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        config.headers.Authorization = token;
    }else{

    }
    return config;
}, (err) => {
    Message({
        message: '请求超时',
        type: 'error'
    });
    return Promise.resolve(err)
});*/

axios.interceptors.response.use((res) => {
    if(res.data.code === "1"){
        return res.data.data
    }else{
        console.log("出错了")
        return Promise.reject()
    }
}, (err) => {
    console.log("纳尼")
    return Promise.reject(err)
});

export function postRequest(url, params) {
    return axios({
        method: 'post',
        url: `${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let i in data) {
                ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export function uploadFileRequest(url, params) {
    return axios({
        method: 'post',
        url: `${url}`,
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export function putRequest(url, params) {
    return axios({
        method: 'put',
        url: `${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export function deleteRequest(url) {
    return axios({
        method: 'delete',
        url: `${url}`
    })
}

export function getRequest(url) {
    return axios({
        method: 'get',
        url: `${url}`
    })
}
