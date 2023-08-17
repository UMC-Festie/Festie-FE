// TODO : 공통 Axios 세팅
import axios from "axios";

export const commonAxios = ({ url, method, params, data, body }) => {
  return axios({
    url: `3.37.193.119/${url}`,
    method,
    params,
    data,
    body,
  });
};
