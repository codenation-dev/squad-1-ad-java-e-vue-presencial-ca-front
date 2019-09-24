import axios from "axios";
import { domain } from "env";

async function get(path, config) {
  try {
    await axios.get(`${domain}/${path}`, config);
  } catch (error) {
    throw new Error(error);
  }
}

async function post(path, form) {
  try {
    await axios.post(`${domain}/${path}`, form);
  } catch (error) {
    throw new Error(error);
  }
}

export { get, post };
