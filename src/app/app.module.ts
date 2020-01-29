import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgModel, FormsModule, NgForm} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserListComponent } from './user-list/user-list.component';
import { BuildListComponent } from './build-list/build-list.component';
import { BuildComponent } from './build/build.component';
import { DefaultComponent } from './default/default.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { SelectComponentComponent } from './select-component/select-component.component';
import { DatePipe } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { NewOrderComponent } from './new-order/new-order.component';

const parentModuleRoutes: Routes = [
  {
    path:'',component:HomeComponent,children:[{path:'',component:DefaultComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'',component:DefaultComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'login',component:LoginComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'register',component:RegisterComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'aboutus',component:AboutusComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'change-password',component:ChangePasswordComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'contactus',component:ContactusComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'component-list',component:ComponentListComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'user-list',component:UserListComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'build-list',component:BuildListComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'build',component:BuildComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'add-component',component:AddComponentComponent}]
  },
  {
    path:'delete-component/:id',component:DeleteComponentComponent
  },
  {
    path:'home',component:HomeComponent,children:[{path:'edit-component/:id',component:EditComponentComponent}]
  },
  {
    path:'edit-component/:id',component:EditComponentComponent
  },
  {
    path:'home',component:HomeComponent,children:[{path:'select-component/:type',component:SelectComponentComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'order-list/:userid',component:OrderListComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'order-list',component:OrderListComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'new-order/:id',component:NewOrderComponent}]
  },
  
];

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    AddComponentComponent,
    ComponentListComponent,
    RegisterComponent,
    HomeComponent,
    ChangePasswordComponent,
    ContactusComponent,
    UserListComponent,
    BuildListComponent,
    BuildComponent,
    DefaultComponent,
    DeleteComponentComponent,
    EditComponentComponent,
    SelectComponentComponent,
    OrderListComponent,
    NewOrderComponent,
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(parentModuleRoutes)
  ],
  exports:[RouterModule],
  providers: [
   
    DatePipe,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }