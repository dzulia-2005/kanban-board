import axios, {CreateAxiosDefaults} from "axios";

const axiosConfig:CreateAxiosDefaults = {
    baseURL:process.env.NEXT_PUBLIC_API_BASE_URL
}

export const httpClient = axios.create(axiosConfig);