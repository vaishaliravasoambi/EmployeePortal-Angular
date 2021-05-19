import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
   { path:"login", component : LoginComponent },
  { path:"signup", component : SignupComponent },
  
    
    {
      path:'dashbord',
      
      loadChildren:()=>import(`./dashbord/dashbord.module`).then(m=>m.DashbordModule),
       canActivate:[AuthguardGuard],
    },
   

  
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SignupComponent,LoginComponent];