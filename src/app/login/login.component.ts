import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import * as toastr from "toastr";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdetails=
  {
      "id": "",
      "name": "",
      "email": "",
      "contact": "",
      "password": "",
      "type": null,
      "builds": ""  
  }
  user:any;
  message:any;
  
  constructor(
    private userService: UserService,
    private router: Router,
    private toaster: ToastrService) { }


  ngOnInit() {
  }

  onSignup() {
    this.router.navigate(['/home/register']);
  }
  onCancel()
  {
    this.router.navigate(['/home']);
    this.toaster.info("Redirecting to Home")
  }
  
  SignIn()
  {
  let ObservableResult = this.userService.CheckCredentialsWithDB(this.userdetails);
    ObservableResult.subscribe((result)=>{
      console.log(result);
      this.user =result;
     
      if(this.user.type == "ADMIN")
      {
        console.log("in admin");
        sessionStorage['login_status'] = this.user.id;
        localStorage.setItem('role',this.user.type);
        sessionStorage.setItem('email',this.user.email);
        sessionStorage.setItem('user',JSON.stringify(this.user));
        localStorage.setItem('flag','true');
        this.router.navigate(['/home']);
        this.toaster.success("Admin Logged in");

        
      } 
      else if(this.user.type == "CUSTOMER")
      {
        console.log("in customer");
        sessionStorage['login_status'] = this.user.id;
        localStorage.setItem('role',this.user.type);
        sessionStorage.setItem('user',JSON.stringify(this.user));
        localStorage.setItem('flag','true');
        this.router.navigate(['/home']); 
        this.toaster.success("Login Successful!");
      }
      else
      {
        console.log("in msg");
        this.toaster.error("Invalid Email/Password","Login failed")
        alert("Wrong email or Password");
        this.message = "Email Id / password is wrong!";
      }
  });

}}

