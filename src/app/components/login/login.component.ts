import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentication:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  public hasLoginButtonClicked:Boolean=false;
  public onSubmit(data:any):void
  {
    
 
    console.log(data)
    this.hasLoginButtonClicked=true;
    this.authentication.login(data).subscribe((res:any)=>{
      if(res.token && res.token !='')
      {
         console.log('Login successfull'); 
          window.sessionStorage.setItem('login','true')
         this.router.navigate(['dashbord']);
      }
      else
      {
        
        console.log('Login Failed');
  
      }
    });
  }
}
