import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {

  component=
  {
    "manufacturer": "",
    "name": "",
    "model_no": "",
    "price": 0,
    "type": "",
    "description": null,
    "image": null
}
message="";
  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  AddComp()
  {
    let ObservableResult = this.userService.NewComponent(this.component);
    ObservableResult.subscribe((result)=>{
      console.log(result);
      this.message="Component added succesfully!";
      this.router.navigate(['/home/component-list']);
    })
  }

}
