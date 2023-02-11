import axios from "axios";

export default axios.create({
    baseURL: "https://hochland.ravdel.ru/api",
    timeout: 10000,
    responseType: "json",
    headers: {
        // 'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});