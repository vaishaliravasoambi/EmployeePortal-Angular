import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  obj:any
  constructor(private router:Router,private ActivateedRoute:ActivatedRoute, public auth:AuthserviceService){}
  ngOnInit(): void {
    this.obj = this.auth.EmployeeData;
   

  }
}
