import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.css']
})
export class BuildListComponent implements OnInit {

  buildlist :any;
  constructor(private service: DataService,
    private router: Router) {}

  ngOnInit() {

    if(localStorage.getItem('role')=="ADMIN"){
      console.log("inside ngoninit of component list for admin")
   let ObservableResult = this.service.BuildList();
   ObservableResult.subscribe((data)=>{
     this.buildlist=data;
     console.log(this.buildlist);
    })
    }else{
      console.log("inside ngoninit of component list for customer")
      console.log(sessionStorage.getItem('login_status'));
   let ObservableResult = this.service.BuildById(sessionStorage.getItem('login_status'));
   ObservableResult.subscribe((data)=>{
     this.buildlist=data;
     console.log(this.buildlist);
    })
    }
  }
  DeleteBuild(id)
  {
    let ObservableResult = this.service.DeleteBuild(id,sessionStorage.getItem('login_status'));
      ObservableResult.subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/home/build-list']);
      })
  }
  PlaceOrder(id)
  {
    console.log("pagal nush")
    this.router.navigate(['/home/new-order/'+id]);
  }
}
