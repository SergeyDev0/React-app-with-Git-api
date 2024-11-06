import { makeAutoObservable } from "mobx";

class AuthStore {
  accessToken = "";
  refreshToken = "";
  
  constructor () {
    makeAutoObservable(this);
  }

  setTokens() {

  }

  clearTokens() {

  }
}

export const AuthStore = new AuthStore();