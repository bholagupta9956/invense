import BaseApiService from "./BaseService";

const PATH = "/project";
class ProjectService extends BaseApiService {
  getProjectDetails(projectId: string) {
    let endPoint = `${PATH}/${projectId}`;
    return this.makeGetRequest(endPoint);
  }

  getDevices(projectId: string) {
    let endPoint = `${PATH}/${projectId}/devices`;
    return this.makeGetRequest(endPoint);
  }
}

export default new ProjectService();
