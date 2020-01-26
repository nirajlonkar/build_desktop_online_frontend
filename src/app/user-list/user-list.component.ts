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
    console.log("inside ngoninit of component list")
   let ObservableResult = this.service.UserList();
   ObservableResult.subscribe((data)=>{
     this.userlist=data;
     console.log(data);
  });
  }
}
