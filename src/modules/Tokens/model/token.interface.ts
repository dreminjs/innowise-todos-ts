export interface ITokenSlice {
  setToken: (token: string) => void;
  token: string | null;
  removeToken: () => void;
}
