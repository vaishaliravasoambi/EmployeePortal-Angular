import { Component, OnInit } from '@angular/core';
import {Input,EventEmitter} from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { Comment } from './../Comment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  
  obj: any
  inputComment:string="";
  comments: Comment[] = [];
  constructor(private route: ActivatedRoute, public auth:AuthserviceService) { }
  
  
  
  
  ngOnInit(): void {
  
    this.comments =[
      {
        Email:"ambi.vaishaliravaso@genpact.com",
        Body:"Great Explaination of relevance of article..."
      },
      {
        Email:"xyz@genpact.com",
        Body:"Great Explaination of relevance of article..."
      }
    ]
   
   
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

  deleteComment(id:number){
    this.comments=this.comments.filter((v,i)=>i!==id);

  }
  addComment()
  {
    this.comments.push({
     Email:this.inputComment,
      Body:this.inputComment,
      

    })
     this.inputComment=""
  }


}
