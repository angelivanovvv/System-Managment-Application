import apiConfig from "../../api-config";

import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
} from "./api-requests";

export const Notices = Object.freeze({
  list: () => getRequest(`${apiConfig.base_url}/notices`),
  single: id => getRequest(`${apiConfig.base_url}/notices/${id}`),
  create: payload => postRequest(`${apiConfig.base_url}/notices`, payload),
  edit: (id, payload) =>
    putRequest(`${apiConfig.base_url}/notices/${id}`, payload),
  delete: id => deleteRequest(`${apiConfig.base_url}/notices/${id}`)
});
