
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
const child_routes: Routes = [
  { path:"list", component : ListComponent},
  { path:"card", component :CardComponent},
  { path:"profile/:ohr", component : ProfileComponent},
  { path:"reset/:ohr", component : ResetPasswordComponent},
  { path:"edit/:ohr", component : EditProfileComponent},
 
  {
    path:'',
    pathMatch:'full',
    redirectTo:'list'
  },
  
  
];

@NgModule({
  declarations: [
    ListComponent,ProfileComponent, ResetPasswordComponent, EditProfileComponent, CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule.forChild(child_routes)
  ],
  exports: [RouterModule]
})
export class DashbordModule { }
