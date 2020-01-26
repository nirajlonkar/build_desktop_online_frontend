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
   this.userdetails=JSON.parse(sessionStorage['user']);
   let id = this.userdetails.id;
    console.log("inside ngoninit of component list")
   let ObservableResult = this.servie.ComponentList();
   ObservableResult.subscribe((data)=>{
     this.component=data;
     console.log(data);
   })
  }

  AddNew()
  {
    this.router.navigate(['/home/add-component']);
  }
}
