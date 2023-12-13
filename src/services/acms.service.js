import http from "../http-common";

class ACMSDataService {

    login(data) {
        return http.post(`/user`, data);
    }

    createConfig(data) {
        return http.post("/configuration", data);
    }

    editConfig(data) {
        return http.patch("/configuration", data);
    }

    getConfig(id) {        
        return http.get(`/configuration/${id}`);
    }

    listConfig() {
        return http.get(`/configuration`);
    }

    deleteConfig(id) {
        return http.delete(`/configuration/${id}`);
    }
  }

export default new ACMSDataService();