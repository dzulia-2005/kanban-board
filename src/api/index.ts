import axios, {CreateAxiosDefaults} from "axios";

const axiosConfig:CreateAxiosDefaults = {
    baseURL:"http://localhost:3000/api"
}

export const httpClient = axios.create(axiosConfig);