import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login:any = {
    username:'',
    password: ''
  }

  constructor(private router:Router){

  }

  onLogin(){
    if(this.login.username == "admin" && this.login.password == "1234"){
      this.router.navigateByUrl('products');
    }
    else{
      alert('Wrong Credentials');
    }
  }

}