import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  ComponentList()
  {
    console.log("component list");
    return this.http.get("http://localhost:8080/FinalProject/admin/component-list")
  }
  ComponentById(id)
  {
    return this.http.get("http://localhost:8080/FinalProject/admin/"+id)
  }
  ComponentByType(value)
  {
    return this.http.get("http://localhost:8080/FinalProject/admin/component-list/"+value)
  }
  DeleteComponent(id)
  {
    console.log("inside delete component service");
    return this.http.delete("http://localhost:8080/FinalProject/admin/"+id)
  }
  EditComponent(id,c)
  {
    console.log("inside edit component");
    return this.http.put("http://localhost:8080/FinalProject/admin/"+id,c);
  }
  UserList()
  {
    console.log("user list");
    return this.http.get("http://localhost:8080/FinalProject/admin/user-list")
  }
  
  BuildList()
  {
    console.log("user list");
    return this.http.get("http://localhost:8080/FinalProject/build/list")
  }
  AddBuild(build,id)
  {
    return this.http.post("http://localhost:8080/FinalProject/build/new/"+id,build)
  }
  
}
