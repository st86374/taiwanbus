import axios from 'axios'
import jsSHA from 'jssha';

const apiConfig = axios.create({
    baseURL:'https://ptx.transportdata.tw/MOTC/v2/Bus/',
})
const getAuthorizationHeader = () => {
    const AppID = 'af3a01e61d284651b860be124d87fe65';
    const AppKey = 'NblqJVsM9mca0s-oZfmWJ-PDspY';
    const GMTString = new Date().toUTCString();
    const ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    const HMAC = ShaObj.getHMAC('B64');
    const Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
    return { 'Authorization': Authorization, 'X-Date': GMTString }; 
  }
  apiConfig.interceptors.request.use(
    config => {
      config.headers = getAuthorizationHeader();
      return config;
    },
    err => Promise.reject(err)
  )

  export default apiConfig
