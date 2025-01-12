import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService, private route: Router) {}


  login() {
    this.loginService.userLogin(this.user).subscribe((data)=>{
      if(!data){
        alert('Invalid Credentials!');
      }
      else{

        localStorage.setItem('authToken', data.token); // Save token
        localStorage.setItem('userId', data.id); // Save user ID
        localStorage.setItem('userRole', data.role); // Save role

        if(data.role === 'ADMIN'){
          this.route.navigateByUrl('admin');
        }
        else if(data.role === 'CUSTOMER'){
          this.route.navigateByUrl('home');
        }
      }
    });
  }

}
