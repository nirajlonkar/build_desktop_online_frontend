import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userlist :any;
  constructor(private service: DataService,
    private router: Router) {}

  ngOnInit() {
    if(sessionStorage['login_status'])
    {
      if(localStorage['role']=='ADMIN')
      {
        console.log("inside ngoninit of component list")
        let ObservableResult = this.service.UserList();
        ObservableResult.subscribe((data)=>{
          this.userlist=data;
          console.log(data);
       });
      }
      else{
        alert("You are not allowed to visit this page.")
        this.router.navigate(['/home']);
      }
    }else{
      alert("You are not logged in. Please login.")
      this.router.navigate(['/home/login']);
    }
    
  }
}
