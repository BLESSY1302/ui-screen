import axios from "axios";

export default axios.create({
    baseURL: "acms",
    headers: {
        "Content-type": "application/json"
    }
});