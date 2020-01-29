import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.css']
})
export class SelectComponentComponent implements OnInit {

  component:any;
  constructor(private service: DataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if(sessionStorage['login_status'])
    {
      this.route.paramMap.subscribe((result)=>{
        let type = result.get('type');
        let ObservableResult = this.service.ComponentByType(type);
        ObservableResult.subscribe((data)=>{
          console.log(data);
          this.component=(data);
  
        })
      })
    }else{
      alert("You are not logged in. Please login.")
      this.router.navigate(['/home/login']);
    }
  }

  AddToBuild(type,id)
  {
    console.log(id);
    sessionStorage.setItem(type,id);
    this.router.navigate(['/home/build']);
  }

}
