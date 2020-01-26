import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userdetails=
  {
    "name": "",
    "email": "",
    "contact": "",
    "password": "",
    "type": "CUSTOMER",
    "builds": 0
  }
  user:any;
  message="";
  constructor(private router: Router,
              private userService: UserService) { }

  
  ngOnInit() {
  }

  onSignup() 
  {
      let ObservableResult = this.userService.Register(this.userdetails);
      ObservableResult.subscribe((result)=>{
        console.log(result);
        this.user=result;

        if(this.user.type=="CUSTOMER" && result!=null)
        {
          console.log("Registered succesfully!");
          this.message="Registration Succesful. Please proceed to login."
        }
        this.router.navigate(['/home/login']);
      })
  }

  GoBackHome()
  {
    this.router.navigate(['/home/login']);
  }


}
