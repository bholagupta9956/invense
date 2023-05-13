import BaseApiService from "./BaseService";

const PATH = "/event";
class EventService extends BaseApiService {
  getEvents(params: any) {
    let endPoint = `${PATH}?${params}`;
    return this.makeGetRequest(endPoint);
  }
}

export default new EventService();
