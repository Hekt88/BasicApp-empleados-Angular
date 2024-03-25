import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService){


  }
  ngOnInit(): void {
    
  }

  //metodo login recibe argumento tipo form gracias a clase Ngform
  login(form:NgForm){
    //rescatamos datos del formulario

    const email=form.value.email;
    const password=form.value.password;

    this.loginService.login(email, password);
    


  }

}
