import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, DefaultUrlSerializer } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  flag :boolean=false;
  url = 'http://localhost:3000/user';

  constructor(
    private router: Router,
    private http: HttpClient) {
      console.log("aaaaaaaaaaaa")
      //this.flag=true;
     }

     CheckCredentialsWithDB(userdetails)
     {
       console.log("inside log in")
       return this.http.post("http://localhost:8080/FinalProject/user/login",userdetails);
     }

     Register(userdetails)
     {
       console.log("inside register user");
       return this.http.post("http://localhost:8080/FinalProject/user/register",userdetails);
     }

     NewComponent(component)
     {
       console.log("inside add component");
       return this.http.post("http://localhost:8080/FinalProject/admin/add-component",component);
     }

     ChangePass(user)
     {
       return this.http.put("http://localhost:8080/FinalProject/user/changepass",user);
     }

     

     IsLoggedIn()
    {
    if(window.sessionStorage.getItem("login_status")!=null && window.sessionStorage.getItem("login_status")=="1")
    {
      return true;
    }
    else{
      return false;
    }
  }

  signup()
  {

  }
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   // check if user has logged in
  //   if (sessionStorage['login_status'] == '1') {
  //    console.log("ffff");
  //  //   this.flag=true;
  //     return true;
  //   }
    
  //   this.router.navigate(['/login']);
  //   return false;
  // }
