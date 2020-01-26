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
    console.log("inside ngoninit of component list")
   let ObservableResult = this.service.BuildList();
   ObservableResult.subscribe((data)=>{
     this.buildlist=data;
     console.log(data);
    })
  }

}
