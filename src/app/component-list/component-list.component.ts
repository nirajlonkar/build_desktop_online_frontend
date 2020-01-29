import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {

  componentlist :any;
  constructor(private servie: DataService,
    private router:Router) { }
    userdetails={
      id:""
    }
    component:any;
  ngOnInit()
  {
    if(sessionStorage['login_status'])
    {
      if(localStorage['role']=='ADMIN')
      {
        this.userdetails=JSON.parse(sessionStorage['user']);
        let id = this.userdetails.id;
         console.log("inside ngoninit of component list")
        let ObservableResult = this.servie.ComponentList();
        ObservableResult.subscribe((data)=>{
          this.component=data;
          console.log(data);
        })     
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

  AddNew()
  {
    this.router.navigate(['/home/add-component']);
  }
}
