import axios from "axios";

const instance = axios.create(
    {
        baseURL:'/https://bd-api.eduvial.space/api',
        withCredentials: false
    }
)

export default instance
