import router from "@/router";

export default config => {
  if (global.location.pathname != "/login") {
    try {
      const { auth } = JSON.parse(localStorage.getItem("state"));
      const { access_token } = auth.oauth;
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
    } catch {
      router.push({ name: "login" });
    }
  }
  return config;
};
