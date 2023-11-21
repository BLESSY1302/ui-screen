import http from "../http-common";

class ACMSDataService {

    login(data) {
        return http.post(`/user`, data);
    }

    createConfig(data) {
        return http.post("/configuration", data);
    }

    editConfig(data) {
        return http.put("/configuration", data);
    }

    listConfig() {
        return http.get(`/configuration`);
    }

  /*  get(id) {
        return http.get(`/tutorials/${id}`);
    }



    update(id, data) {
        return http.put(`/tutorials/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return http.delete(`/tutorials`);
    }

    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }*/
}

export default new ACMSDataService();