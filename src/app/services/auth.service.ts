import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyCLC2dMBcAL0s1hSyP5yu1DFhi5h96O7-o';

  constructor(private http:HttpClient) { }

  logout() {

  }

  login(user:UsuarioModel) {
    
    const authData = {
      email : user.email,
      password : user.password,
      returnSecureToken : true
    }

    return this.http.post
    (
      `${ this.url }signInWithPassword?key=${ this.apiKey }`,
      authData
    );
  }

  register(user:UsuarioModel) {

    const authData = {
      email : user.email,
      password : user.password,
      returnSecureToken : true
    }

    return this.http.post
    (
      `${ this.url }signUp?key=${ this.apiKey }`,
      authData
    );
  }
}
