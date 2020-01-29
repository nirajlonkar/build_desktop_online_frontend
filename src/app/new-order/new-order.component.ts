import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  id:any;
  build:any;
  cpu:any;
  gpu:any;
  mb:any;
  ram:any;
  smps:any;
  cooler:any;
  case:any;
  wificard:any;
  ssd:any;
  hdd:any;
  totalprice=0;
  delivery_date:any;
  placed_date:any;
  orders:any;
  order={
    "build_id": "",
    "oprice": 0,
    "placed_date":  "",
    "delivery_date":  "",
    "status": "PENDING",
    "paymentMode": "",
    "qty": "",
  }
  constructor(private service: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe) {
      var date1= new Date();
      date1.setDate(date1.getDate()+20);
      this.delivery_date = this.datePipe.transform(date1, 'yyyy-MM-dd');
      this.placed_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      this.order.build_id=this.id;
      this.order.oprice=this.totalprice;
      this.order.placed_date=this.placed_date;
      this.order.delivery_date=this.delivery_date;
     }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      this.id = result.get("id");
      this.order.build_id=this.id;
    })
    let ObservableResult = this.service.BuildID(this.id);
    ObservableResult.subscribe((result)=>{
      this.build=result;
      console.log(this.build)
      
      let CPU = this.service.ComponentById(this.build.cpu_id);
      CPU.subscribe((result)=>{
        this.cpu=result;
        this.totalprice=this.totalprice+this.cpu.price;
        console.log(this.cpu)
      })
      let GPU = this.service.ComponentById(this.build.gpu_id);
      GPU.subscribe((result)=>{
        this.gpu=result;
        this.totalprice=this.totalprice+this.gpu.price;
        console.log(this.gpu)
      })
      let SSD = this.service.ComponentById(this.build.ssd_id);
      SSD.subscribe((result)=>{
        this.ssd=result;
        this.totalprice=this.totalprice+this.ssd.price;
        console.log(this.ssd)
      })
      let HDD = this.service.ComponentById(this.build.hdd_id);
      HDD.subscribe((result)=>{
        this.hdd=result;
        this.totalprice=this.totalprice+this.hdd.price;
        console.log(this.hdd)
      })
      let SMPS = this.service.ComponentById(this.build.smps_id);
      SMPS.subscribe((result)=>{
        this.smps=result;
        this.totalprice=this.totalprice+this.smps.price;
        console.log(this.smps)
      })
      let MB = this.service.ComponentById(this.build.mb_id);
      MB.subscribe((result)=>{
        this.mb=result;
        this.totalprice=this.totalprice+this.mb.price;
        console.log(this.mb)
      })
      let RAM = this.service.ComponentById(this.build.ram_id);
      RAM.subscribe((result)=>{
        this.ram=result;
        this.totalprice=this.totalprice+this.ram.price;
        console.log(this.ram)
      })
      let COOLER = this.service.ComponentById(this.build.cooler_id);
      COOLER.subscribe((result)=>{
        this.cooler=result;
        this.totalprice=this.totalprice+this.cooler.price;
        console.log(this.cooler)
      })
      let WIFICARD = this.service.ComponentById(this.build.wificard_id);
      WIFICARD.subscribe((result)=>{
        this.wificard=result;
        this.totalprice=this.totalprice+this.wificard.price;
        console.log(this.wificard)
      })
      let CASE = this.service.ComponentById(this.build.case_id);
      CASE.subscribe((result)=>{
        this.case=result;
        this.totalprice=this.totalprice+this.case.price;
        this.order.oprice=this.totalprice;
        console.log(this.case)
      })
    })
  }

  PlaceOrder()
  {
    console.log(this.order);
    let ObservableResult = this.service.PlaceOrder(sessionStorage['login_status'],this.order);
    ObservableResult.subscribe((result)=>{
      this.orders=result;
    })
  }

}
