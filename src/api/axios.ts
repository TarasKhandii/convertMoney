import axios from "axios";
import { baseURL } from "../constantData/baseUrl";

const instance = axios.create({
  baseURL,
});

export default instance;
