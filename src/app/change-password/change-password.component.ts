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
    "builds": 1
  }
  ngOnInit() {
    this.user=sessionStorage.getItem('user');
    this.cpd.id=this.user.id;
    console.log(this.user.id)
    this.cpd.name=this.user.name;
    this.cpd.email=this.user.email;
    this.cpd.contact=this.user.contact;
    this.cpd.type=this.user.type;
    this.cpd.builds=this.user.builds;
  }
  ChangePassword()
  {
    this.userdetails.email=sessionStorage.getItem('email');
    if(this.service.CheckCredentialsWithDB(this.userdetails)!=null)
    {
      let ObservableResult = this.service.ChangePass(this.cpd);
      ObservableResult.subscribe((result)=>{
        this.router.navigate(['/home']);
      });
    }
  }

}
