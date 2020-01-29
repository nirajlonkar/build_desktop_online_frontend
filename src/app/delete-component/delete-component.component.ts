import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.css']
})
export class DeleteComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service:DataService,
    private router: Router) { }

  ngOnInit() {
    if(sessionStorage['login_status'])
    {
      if(localStorage['role']=='ADMIN')
      {
        this.route.paramMap.subscribe((result)=>{
          let id = result.get("id");
    
          let ObservableResult = this.service.DeleteComponent(id);
          ObservableResult.subscribe((data)=>{
            console.log(data);
            this.router.navigate(['/home/component-list']);
          })
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

}
