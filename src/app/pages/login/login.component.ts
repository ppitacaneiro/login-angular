import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:UsuarioModel;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  login(formLogin:NgForm) {

    if (formLogin.invalid) {
      return;
    }

    this.auth.login(this.usuario)
    .subscribe( (response) => {
      console.log(response);
    }, (error) => { 
      console.log(error)
    });
  }

}
