import axios, { Method } from "axios";

// const DEFAULT_API_PATH = process.env.REACT_APP_BASE_API_URL ?? "";

const DEFAULT_API_PATH = "https://ph0gwj941k.execute-api.ap-south-1.amazonaws.com"
const VERSION = "/staging/v1";

class BaseApiService {
  constructor(props?: any) {}

  getBaseUrl() {
    return DEFAULT_API_PATH;
  }

  makeRequest(method: Method, url: string, body: any = null) {
    return axios.request({
      method,
      url,
      data: body
    })
  }

  makeGetRequest(url: string) {
    url = `${DEFAULT_API_PATH}${VERSION}${url}`;
    return axios.get(url);
  }

  makePostRequest(url: string, body: any) {
    url = `${DEFAULT_API_PATH}${VERSION}${url}`;
    return axios.post(url, { ...body });
  }

  makePutRequest(url: string, body: any) {
    url = `${DEFAULT_API_PATH}${VERSION}${url}`;
    return axios.post(url, { ...body });
  }
}

export default BaseApiService;
