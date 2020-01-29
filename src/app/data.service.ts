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
    console.log("admin build list");
    return this.http.get("http://localhost:8080/FinalProject/build/list")
  }
  BuildById(id)
  {
    console.log("user build list");
    return this.http.get("http://localhost:8080/FinalProject/build/list/"+id);
  }
  AddBuild(build,id)
  {
    return this.http.post("http://localhost:8080/FinalProject/build/new/"+id,build)
  }
  OrderDetails(userid)
  {
    return this.http.get("http://localhost:8080/FinalProject/user/order/list/"+userid)
  }
  AllOrderDetails()
  {
    return this.http.get("http://localhost:8080/FinalProject/user/order/list")
  }
  DeleteBuild(id,uid)
  {
    return this.http.delete("http://localhost:8080/FinalProject/build/"+id+"/"+uid)
  }
  DeliverSystem(id,order)
  {
    return this.http.put("http://localhost:8080/FinalProject/admin/order/"+id,order)
  }
  BuildID(id)
  {
    return this.http.get("http://localhost:8080/FinalProject/build/"+id);
  }
  PlaceOrder(ids,orders)
  {
    console.log("in place order")
    return this.http.post("http://localhost:8080/FinalProject/user/order/"+ids,orders);
  }

  
}
