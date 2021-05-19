
import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  obj: any
  
  Name:any;
  // public selectedOHR!: number;
 
  constructor(private router:Router,private ActivateedRoute:ActivatedRoute, public auth:AuthserviceService){}
  ngOnInit(): void {
    this.obj = this.auth.EmployeeData;
   

  }


  page: number = 1;
  search!: string;

}
