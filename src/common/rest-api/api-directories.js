import apiConfig from "../../api-config";

import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
} from "./api-requests";

export const Directories = Object.freeze({
  list: () => getRequest(`${apiConfig.base_url}/directories`),
  single: id => getRequest(`${apiConfig.base_url}/directories/${id}`),
  create: payload => postRequest(`${apiConfig.base_url}/directories`, payload),
  edit: (id, payload) =>
    putRequest(`${apiConfig.base_url}/directories/${id}`, payload),
  delete: id => deleteRequest(`${apiConfig.base_url}/directories/${id}`)
});
