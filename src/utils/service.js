import axios from "axios";
import qs from "qs";

import { domain } from "env";

export async function get(path, headers) {
  const data = await axios.get(`${domain}/${path}`, headers);

  return data;
}

export async function post(path, form, headers) {
  const data = await axios.post(`${domain}/${path}`, form, { headers });

  return data;
}

export async function postUrlEncoded(path, form, headers) {
  const data = await axios.post(`${domain}/${path}`, qs.stringify(form), {
    headers
  });

  return data;
}
