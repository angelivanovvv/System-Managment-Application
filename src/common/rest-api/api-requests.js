import superagent from "superagent";
import superArgentIntercept from "superagent-intercept";

import { RoutesActions } from "../ClientRoutes/clientRoutes";

let ErrorIntercept;

ErrorIntercept = superArgentIntercept((error, response) => {
  if (error) {
    if (error.status === 401 || error.status === 403 || error.status === 404) {
      RoutesActions.toHome();
      console.log(error.response.statusText);
    }
  }
});

const getRequest = route => {
  return new Promise((resolve, reject) => {
    superagent
      .get(route)
      .use(ErrorIntercept)
      //.set() - if there is need to authenticate with some jwt
      .then(response => resolve(response.body))
      .catch(error => reject(error));
  });
};

const postRequest = (route, payload) => {
  return new Promise((resolve, reject) => {
    superagent
      .post(route)
      .use(ErrorIntercept)
      //.set() - if there is need to authenticate with some jwt
      .send(payload)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

const putRequest = (route, payload) => {
  return new Promise((resolve, reject) => {
    superagent
      .put(route)
      .use(ErrorIntercept)
      //.set() - if there is need to authenticate with some jwt
      .send(payload)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

const deleteRequest = route => {
  return new Promise((resolve, reject) => {
    superagent
      .delete(route)
      .use(ErrorIntercept)
      //.set() - if there is need to authenticate with some jwt
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

export { getRequest, postRequest, putRequest, deleteRequest };
