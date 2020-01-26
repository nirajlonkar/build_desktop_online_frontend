import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role:any;
  user:any;
  flag:boolean=false;
  constructor(private userService: UserService,private router: Router) { 

    this.flag=localStorage['flag'];
    console.log("aaaaaa"+this.flag);

  }
  ngOnInit() {
    this.role=localStorage['role'];
    if(this.user!=null)
    this.user=JSON.parse(sessionStorage['user']);
    console.log(this.user);
    console.log('role: ', this.role);    
  }


  onLogout() {
    if (sessionStorage['login_status'] == '1') {
      const result = confirm('Are you sure you want to logout?');
      if (result) {
        sessionStorage['login_status'] = '0';
      
        localStorage.removeItem('role');
        sessionStorage.removeItem('user');
        localStorage.removeItem('flag');
        localStorage.removeItem('role');
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['/home']);
      }
    } else {
      alert('First Login Dumboo');
    }
  }

  
}
