import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  flag:boolean=false;
  constructor(private service: UserService,
    private router: Router) {
   }
   user:any;
  userdetails={
    "email":"",
    "password":""
  }
  cpd={
    "id": '',
    "name": "",
    "email": "",
    "contact": "",
    "password": "",
    "type": null,
    "builds": ""
  }
  ngOnInit() {
    if(sessionStorage['login_status'])
    {
      this.user=sessionStorage.getItem('user');
    this.cpd.id=sessionStorage.getItem('login_status');
    console.log(this.cpd.id);
    }else{
      alert("You are not logged in. Please login.")
      this.router.navigate(['/home/login']);
    }
    
  }
  ChangePassword()
  {
    // this.userdetails.email=sessionStorage.getItem('email');
    console.log(this.userdetails);
    let ObservableResult = this.service.CheckCredentialsWithDB(this.userdetails);
    ObservableResult.subscribe((result)=>{
      console.log(result);
      this.user =result;
      console.log(this.user);
    });
    if(this.user.id==sessionStorage.getItem('login_status'))
    {
      console.log(this.user);
      let ObservableResult = this.service.ChangePass(this.cpd);
      ObservableResult.subscribe((result)=>{
        this.router.navigate(['/home']);
      });
    }
    else{
      alert("Worng Password");
    }
  }

}
