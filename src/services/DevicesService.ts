import BaseApiService from "./BaseService";

const PATH = "/device";
class Devices extends BaseApiService {
  getDevice(deviceId = "6340416926e5112f6d0bcbfc") {
    let endPoint = `${PATH}/${deviceId}`;
    return this.makeGetRequest(endPoint);
  }
}

export default new Devices();
