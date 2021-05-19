import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { DOCUMENT } from '@angular/common'; 
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  successhtml=""
  failhtml=""
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  ResetForm=new FormGroup({
    oldPass:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[0-9]*')]),
    NewPass:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[0-9]*')]),
    ConfirmPassword:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[0-9]*')]),
  
  
  }
  )

  

  hasResetButtonClicked=false
  collectData(oldPassword:any):void
  {
    console.log(this.ResetForm.value);
        this.hasResetButtonClicked=true;
     
        const NewPassword = oldPassword.NewPass
        const ConfirmPassword = oldPassword.ConfirmPassword
     
     
      if(NewPassword===ConfirmPassword )
      {
         console.log('reset successfull'); 
        this.successhtml="Reset  Password SuccessFull!"
        //  this.router.navigate(['profil']);
      }
      else
      {
        console.log('resetPassword Failed')
        this.failhtml="Reset Password  Failed, please check your password!"
      }
    }
  }
  




  
  

