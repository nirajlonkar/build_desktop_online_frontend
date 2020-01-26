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
    this.route.paramMap.subscribe((result)=>{
      let id = result.get("id");

      let ObservableResult = this.service.DeleteComponent(id);
      ObservableResult.subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/home/component-list']);
      })
    })
  }

}
