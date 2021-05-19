import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
 import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public hasLoginButtonClicked:Boolean=false;
   constructor(private authentication:AuthserviceService,private router:Router) { }
  obj = {}
  ngOnInit(): void {
  }
 
  url="./assets/Images/upload.png";
  onSelectFile(e:any)
  {
    if(e.target.files)
    {
        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=(event:any)=>{
          this.url=event.target.result;
        }
    }

  }
 
  RegForm=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[0-9]*')]),
    cpassword:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[0-9]*')]),
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
     OHR:new FormControl('',[Validators.required,Validators.minLength(5)]),
    //  upload:new FormControl('',[Validators.required])
  })

  get email()
  {
    return this.RegForm.get('email')
  }
  
  collectData(data:any):void
  {
    console.log(this.RegForm.value);
        this.hasLoginButtonClicked=true;
    this.authentication.signup(data).subscribe((res:any)=>{
      if(res.token && res.token !='' )
      {
         console.log('registration successfull'); 
         this.router.navigate(['login']);
      }
      else
      {
        console.log('registration Failed')
      }
    });
  }
  


}
