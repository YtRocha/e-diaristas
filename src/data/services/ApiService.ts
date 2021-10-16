import axios from "axios";

const url = "https://e-diaristas-yt.herokuapp.com/";

export const ApiService = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    },
});
