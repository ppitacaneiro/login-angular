import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyCLC2dMBcAL0s1hSyP5yu1DFhi5h96O7-o';
  userToken:string;

  constructor(private http:HttpClient) {
      this.readToken();
  }

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
    ).pipe(
      map( response => {
        this.saveToken(response['idToken']);
        return response;
      })
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
    ).pipe(
      map( response => {
        this.saveToken(response['idToken']);
        return response;
      })
    );
  }

  private saveToken(idToken:string) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = "";
    }

    return this.userToken;
  }

}
