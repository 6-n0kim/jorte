import axios from 'axios';

const api = axios.create({
    // 백엔드 서버 주소 (배포 환경에 따라 변경)
    baseURL: 'http://192.168.1.49:8000',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;