const LOCALHOST_URL = 'http://localhost';
const API_GATEWAY_URL = 'http://34.163.109.115';

export const API_URLS ={

    auth: {
        localhost: `${LOCALHOST_URL}:9090/api/v1/auth`,
        apiGateway: `${API_GATEWAY_URL}/auth`
    },
    user: {
        localhost: `${LOCALHOST_URL}:9095/api/v1/user`,
        apiGateway: `${API_GATEWAY_URL}/user`
    },
    company: {
        localhost: `${LOCALHOST_URL}:9091/api/v1/company`,
        apiGateway: `${API_GATEWAY_URL}/company`
    },
    comment: {
        localhost: `${LOCALHOST_URL}:9093/api/v1/comment`,
        apiGateway: `${API_GATEWAY_URL}/comment`
    },
};