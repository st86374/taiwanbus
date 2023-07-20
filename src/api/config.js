import axios from 'axios';
import qs from 'qs';
import Cookies from 'js-cookie';

const apiConfig = axios.create({
  baseURL: 'https://tdx.transportdata.tw/api/basic/v2/Bus/',
});

async function getAuthorizationHeader() {
  const parameter = {
    grant_type: 'client_credentials',
    client_id: 'st86374-0ecc12e2-da3b-45a9',
    client_secret: '8193d254-d04d-45ef-ba48-960367c809fd',
  };

  let auth_url = `https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token`;
  try {
    let res = await axios({
      method: 'POST',
      url: auth_url,
      data: qs.stringify(parameter),
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    });
    let accessToken = res.data.access_token;
    Cookies.set('token', accessToken, { expires: 1 }); // 將 token 存入 cookie，並設定存活一天的時間
    return accessToken;
  } catch (err) {
    throw err; // 改用 throw 來拋出錯誤
  }
}

let isRefreshing = false; // 判斷是否正在重新獲取 token 的 flag
let refreshSubscribers = []; // 存放等待重新獲取 token 的請求的陣列

function onTokenRefreshed(newToken) {
  // 當 token 成功重新獲取後，執行這個函式來通知所有等待的請求
  refreshSubscribers.forEach(callback => callback(newToken));
  refreshSubscribers = [];
  isRefreshing = false;
}

function addRefreshSubscriber(callback) {
  // 添加等待重新獲取 token 的請求到陣列
  refreshSubscribers.push(callback);
}

apiConfig.interceptors.request.use(
  async config => {
    let token = Cookies.get('token');
    if (!token) {
      token = await getAuthorizationHeader();
    }
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  async err => {
    const originalRequest = err.config;
    if (err.response.status === 401 && !originalRequest._retry) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const newToken = await getAuthorizationHeader();
          onTokenRefreshed(newToken); // 重新獲取 token 成功，通知所有等待的請求
          originalRequest.headers.authorization = `Bearer ${newToken}`;
          return apiConfig(originalRequest);
        } catch (refreshError) {
          // 如果重新獲取 token 失敗，可能執行登出等操作或者其他錯誤處理
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      } else {
        // 正在重新獲取 token，將請求添加到等待陣列
        const retryOriginalRequest = new Promise(resolve => {
          addRefreshSubscriber(newToken => {
            originalRequest.headers.authorization = `Bearer ${newToken}`;
            resolve(apiConfig(originalRequest));
          });
        });
        return retryOriginalRequest;
      }
    }
    return Promise.reject(err);
  }
);

export default apiConfig;
