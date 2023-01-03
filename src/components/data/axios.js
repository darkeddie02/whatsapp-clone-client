import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-clone-server.onrender.com",
});

export default instance;
