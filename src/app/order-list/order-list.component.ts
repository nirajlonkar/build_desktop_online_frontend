import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit 
{

  orders:any;
  orderdetails={
    "id": "",
    "build_id": "",
    "oprice": "",
    "placed_date": "",
    "delivery_date": "",
    "status": "",
    "paymentMode": "",
    "qty": ""
  }
  constructor(private service: DataService,
    private router: Router,
    private userService: UserService) { }


  ngOnInit() 
  {
    if(sessionStorage['login_status'])
    {
      if(localStorage.getItem('role')=="ADMIN")
    {
      let ObservableResult = this.service.AllOrderDetails();
      ObservableResult.subscribe((result)=>{
        this.orders=result;
        console.log(this.orders);
      })
    }
    else
    {
      let ObservableResult = this.service.OrderDetails(sessionStorage.getItem('login_status'));
      ObservableResult.subscribe((result)=>{
      this.orders=result;
      })
    }
    }else{
      alert("You are not logged in. Please login.")
      this.router.navigate(['/home/login']);
    }
  }

  Delivered(id)
  {
    console.log(id);
    let ObservableResult = this.service.DeliverSystem(id,this.orderdetails);
    ObservableResult.subscribe((result)=>{
      this.orders=result;
    })
  }

}
