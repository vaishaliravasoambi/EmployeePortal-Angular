import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, public auth:AuthserviceService) { }


  obj:any
  ngOnInit(): void {
    
    let id = this.route.snapshot.params.ohr;
    console.log("id====>", id)
    
    this.obj=this.auth.EmployeeData.filter(isOHR)
   console.log("main obj=====>",this.obj)
   
   function isOHR(data:any){
    
      if(data.OHR==id)
      {
        console.log(data)
   
        return data
      }
      
     
    }

  }


  

}

