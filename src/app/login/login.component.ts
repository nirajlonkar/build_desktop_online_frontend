import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


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
    private router: Router) { }


  ngOnInit() {
  }

  onSignup() {
    this.router.navigate(['/home/register']);
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
      } 
      else if(this.user.type == "CUSTOMER")
      {
        console.log("in customer");
        sessionStorage['login_status'] = '1';
        localStorage.setItem('role',this.user.type);
        sessionStorage.setItem('user',JSON.stringify(this.user));
        localStorage.setItem('flag','true');
        this.router.navigate(['/home']); 
      }
      else
      {
        console.log("in msg");

        this.message = "Email Id / password is wrong!";
      }
  });

}}
//   SignIn() {
  
//     if (this.user.email.length == 0) {
//       alert('enter email');
//     } else if (this.user.password.length ==0) {
//       alert('enter password');
//     } else {

//       //this.user = this.service.CheckCredentialsWithDB(this.email,this.password);

//       this.userService.CheckCredentialsWithDB(this.users).subscribe((result)=>{
//         console.log(result);
//         this.users = result;

//         console.log(this.users);

//       if(this.user.type=='ADMIN')
//       {
//           sessionStorage['login_status'] = '1';
//           localStorage.setItem('role',this.user.type);
//           sessionStorage.setItem('user',JSON.stringify(this.user));
//           localStorage.setItem('flag','true');
//           this.router.navigate(['/home']);
//           console.log("Admin logged in");
//       }
//       else if(this.user.type=='OWNER')
//       {
        
//           sessionStorage['login_status'] = '1';
//           localStorage.setItem('role',this.user.type);
//           sessionStorage.setItem('user',JSON.stringify(this.user));
//           localStorage.setItem('flag','true');
//           this.emtService.navBarSwitch(true);
//           this.router.navigate(['/home']);
//       }
//       else if(this.user.type=='USER')
//       {
//           sessionStorage['login_status'] = '1';
//           localStorage.setItem('role',this.user.type);
//           sessionStorage.setItem('user',JSON.stringify(this.user));
//           localStorage.setItem('flag','true');
//           this.emtService.navBarSwitch(true);
//           this.router.navigate(['/home']);
//       }else{
//         alert("invalid login");
//         this.router.navigate(['']);
//       }


//       },(error)=>{
//         console.log(error)
//       }
//       )

      
      
//     }
// }
// }
//     onSignup() {
//     this.router.navigate(['/register']);
//   }
// }
