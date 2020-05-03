import { UserlistComponent } from './userlist/userlist.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: TestComponent
  },
  {
    path: 'formarray',
    component: FormArrayComponent
  },
  {
    path: 'register',
    component: RegisterformComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'userlist',
    component:UserlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
