import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn():boolean {
    return !!window.localStorage.getItem('username')
  }

  logOut(){
    window.localStorage.removeItem('username');
    //userId wordt meegegeven ana het object die een nieuw chat bericht maakt
    window.localStorage.removeItem('userId');
  }

  constructor() {}
}
