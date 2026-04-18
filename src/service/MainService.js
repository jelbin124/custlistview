import axios from "axios";

class MainService {
  getUsers() {
    return axios.get("/customer_dops/userdata");
  }
}

const mainService = new MainService();

export default mainService;