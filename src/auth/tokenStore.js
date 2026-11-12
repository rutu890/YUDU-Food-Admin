const KEY = "foodly_admin_token";
export const tokenStore = {
  get: () => sessionStorage.getItem(KEY),
  set: (token) => sessionStorage.setItem(KEY, token),
  clear: () => sessionStorage.removeItem(KEY),
};
