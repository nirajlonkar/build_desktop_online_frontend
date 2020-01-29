import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {
  cpu: any;
  gpu: any;
  ram: any;
  ssd: any;
  hdd: any;
  mb: any;
  smps: any;
  case: any;
  cooler: any;
  wificard: any;
  totalprice=0;
  newbuild: any;
  date:any;
  latest_date:any;
  build={
    "name": "",
    "price": this.totalprice,
    "cpu_id": sessionStorage['CPU'],
    "mb_id": sessionStorage['MB'],
    "ram_id": sessionStorage['RAM'],
    "gpu_id": sessionStorage['GPU'],
    "smps_id": sessionStorage['SMPS'],
    "case_id": sessionStorage['CASE'],
    "cooler_id": sessionStorage['COOLER'],
    "ssd_id": sessionStorage['SSD'],
    "hdd_id": sessionStorage['HDD'],
    "wificard_id": sessionStorage['WIFICARD'],
    "date_creted": this.latest_date
}
  // CPU,GPU,RAM,SSD,HDD,MB,SMPS,CASE,COOLER,WIFICARD
  

  constructor(private service: DataService,
    private router:Router,
    public datepipe: DatePipe) {
   }
  ngOnInit() {

    if(sessionStorage['login_status'])
    {
      this.date=new Date();
    this.latest_date = this.datepipe.transform(this.date,'yyyy-MM-dd');
    let CPU = this.service.ComponentById(sessionStorage['CPU']);
    CPU.subscribe((result)=>{
      this.cpu=result;
      this.totalprice=this.totalprice+this.cpu.price;
    });
    // this.CPU();
    let GPU = this.service.ComponentById(sessionStorage['GPU']);
    GPU.subscribe((result)=>{
      this.gpu=result;
      this.totalprice=this.totalprice+this.gpu.price;
    });
    let RAM = this.service.ComponentById(sessionStorage['RAM']);
    RAM.subscribe((result)=>{
      this.ram=result;
      this.totalprice=this.totalprice+this.ram.price;
    });
    let SSD = this.service.ComponentById(sessionStorage['SSD']);
    SSD.subscribe((result)=>{
      this.ssd=result;
      this.totalprice=this.totalprice+this.ssd.price;
    });
    let HDD = this.service.ComponentById(sessionStorage['HDD']);
    HDD.subscribe((result)=>{
      this.hdd=result;
      this.totalprice=this.totalprice+this.hdd.price;
    });
    let MB = this.service.ComponentById(sessionStorage['MB']);
    MB.subscribe((result)=>{
      this.mb=result;
      this.totalprice=this.totalprice+this.mb.price;
    });
    let SMPS = this.service.ComponentById(sessionStorage['SMPS']);
    SMPS.subscribe((result)=>{
      this.smps=result;
      this.totalprice=this.totalprice+this.smps.price;
    });
    let CASE = this.service.ComponentById(sessionStorage['CASE']);
    CASE.subscribe((result)=>{
      this.case=result;
      this.totalprice=this.totalprice+this.case.price;
    });
    // this.COOLER();
    let COOLER = this.service.ComponentById(sessionStorage['COOLER']);
    COOLER.subscribe((result)=>{
      this.cooler=result;
      this.totalprice=this.totalprice+this.cooler.price;
    });
    let WIFICARD = this.service.ComponentById(sessionStorage['WIFICARD']);
    WIFICARD.subscribe((result)=>{
      this.wificard=result;
      this.totalprice=this.totalprice+this.wificard.price;
      this.build.price=this.totalprice;
    });
    }else{
      alert("You are not logged in. Please login.")
      this.router.navigate(['/home/login']);
    }
    
  }
  SaveBuild()
  {
    if(sessionStorage['CPU']!=null &&
    sessionStorage['GPU']!=null &&
    sessionStorage['RAM']!=null &&
    sessionStorage['SSD']!=null &&
    sessionStorage['HDD']!=null &&
    sessionStorage['MB']!=null &&
    sessionStorage['SMPS']!=null &&
    sessionStorage['CASE']!=null &&
    sessionStorage['COOLER']!=null &&
    sessionStorage['WIFICARD']!=null
    )
    // CPU,GPU,RAM,SSD,HDD,MB,SMPS,CASE,COOLER,WIFICARD
    {
      let ObservableResult = this.service.AddBuild(this.build,sessionStorage['login_status']);
      ObservableResult.subscribe((result)=>{
        this.newbuild=result;
      });
      console.log("Succesfully added build");
      this.router.navigate(['/home/build-list']);
    }
    else{
      alert("Please select all components.")
    }
  }
  // CPU()
  // {
  //   let CPU = this.service.ComponentById(sessionStorage['CPU']);
  //   CPU.subscribe((result)=>{
  //     this.cpu=result;
  //     this.totalprice=this.totalprice+this.cpu.price;
  //   });
  // }
  // COOLER()
  // {
  //   let COOLER = this.service.ComponentById(sessionStorage['COOLER']);
  //   COOLER.subscribe((result)=>{
  //     this.cooler=result;
  //     this.totalprice=this.totalprice+this.cooler.price;
  //   });
  // }
  // WIFICARD()
  // {
  //   let WIFICARD = this.service.ComponentById(sessionStorage['WIFICARD']);
  //   WIFICARD.subscribe((result)=>{
  //     this.wificard=result;
  //     this.totalprice=this.totalprice+this.wificard.price;
  //     this.build.price=this.totalprice;
  //   });
  // }
  RemoveComp(value)
  {
    console.log(value)
    sessionStorage.removeItem(value);
    // this.router.navigateByUrl('/home/build');
    // this.ngOnInit();
    window.location.reload(true);
  }
}
