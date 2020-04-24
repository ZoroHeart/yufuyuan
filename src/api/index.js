//使用axios请求数据
import axios from "axios"
//配置基础路径
axios.defaults.baseURL = "http://rap2.taobao.org:38080/app/mock/238918/yufuyuan";
axios.interceptors.response.use((data) => data.data);

let getLogin=(name,password)=>{
    return axios.get("/login?name="+name+"&password="+password);
};
let getSlidesData=()=>{
    return axios.get("/banner");
};
let getProductData=()=>{
    return axios.get("/groupList");
};

export {getSlidesData,getProductData,getLogin};