import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  c={
    "id":'',
    "manufacturer": "",
    "name": "",
    "model_no": "",
    "price": '',
    "type": null,
  }
  user:any;
  component:any;
  constructor(private service: DataService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit()
  {
    if(sessionStorage['login_status'])
    {
      if(localStorage['role']=='ADMIN')
      {
        console.log("inside ng init of edit component")
    this.route.paramMap.subscribe((result)=>
    {
      // console.log(result.get("id"))
      let id = result.get("id");
      let ObservableResult = this.service.ComponentById(id);
      ObservableResult.subscribe((data)=>
      {
        this.component=data;
        console.log(data);
      });
    });     
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
  EditComp()
  {
    this.c.id=this.component.id;
    console.log(this.component.id);
    console.log(this.c.id);
    let ObservableResult = this.service.EditComponent(this.c.id,this.c);
    ObservableResult.subscribe((result)=>{
      console.log("edit done"+result);
      // this.component=result;
      this.router.navigate(['/home/component-list']);
    });
  }
}
