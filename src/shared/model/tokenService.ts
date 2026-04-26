export const tokenService = {
  tokenKey: "access_token",

  getToken() {
    return localStorage.getItem(this.tokenKey);
  },

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  },

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  },
} as const;
