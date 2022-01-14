import $axios from "/";
import store from "../store";

export async function join(config) {
  const response = await $axios.post("/b2b/api/blog0104c001", config);

  if (response.status === 200) {
    console.log("got token");
    store.commit("auth/setToken", response.data.token);
  }

  return response;
}
