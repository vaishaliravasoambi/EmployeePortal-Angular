import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  EmployeeData:any=[
    {
      
      OHR:703280877,
      Name:"Vaishali Ambi",
      Role:"Consultant",
      Rating:"⭐⭐⭐" ,
      Avatar:"assets/Images/vaishali.jpg"
 } ,
 {
  
  OHR:703280878,
  Name:"Aditi Pawar",
  Role:"Senior Associate",
  Rating:"⭐ ⭐ ⭐ ⭐ ",
  Avatar:"assets/Images/aditi.jpg"

},
{
  
  OHR:703280879,
  Name:"Jeevan Mali",
  Role:"Consultant",
  Rating:"⭐ ⭐ ⭐ ⭐ ",
  Avatar:"assets/Images/jeevan.jpg"


} ,
{

  OHR:703280880,
  Name:"Aboli Mali",
  Role:"Lead Consultant",
  Rating:"⭐ ⭐ ⭐ ",
  Avatar:"assets/Images/aboli.jpg"


} ,
{
  
  OHR:703280881,
  Name:"Vaibhav Jadhav",
  Role:"Principle consultant",
  Rating:"⭐ ⭐ ⭐⭐ ",
  Avatar:"assets/Images/vaibhav.jpg"


} ,
{
  
  OHR:703280882,
  Name:"Priyanka Jathar",
  Role:"Lead Consultant",
  Rating:"⭐ ⭐ ⭐ ",
  Avatar:"assets/Images/pd.jpg"


},
{
  
  OHR:703280883,
  Name:"Varsha Ambi",
  Role:"Lead Consultant",
  Rating:"⭐ ⭐ ⭐ ⭐ ",
  Avatar:"assets/Images/varsha.jpg"


} ,
{
  
  OHR:703280884,
  Name:"Shirin Mujawar",
  Role:"Consultant",
  Rating:"⭐ ⭐ ⭐ ",
  Avatar:"assets/Images/shirin.jpg"


},
{
  
  OHR:703280885,
  Name:"Vishvjeet  Patil",
  Role:"Software Engineer",
  Rating:"⭐ ⭐ ⭐ ⭐ ",
  Avatar:"assets/Images/vishvya.jpg"


} ,
{
  
  OHR:703280886,
  Name:"Shruti Nardekar",
  Role:"Consultant",
  Rating:"⭐ ⭐ ⭐ ⭐ ",
  Avatar:"assets/Images/girl.jpg"


} ,
{
  
  OHR:703280887,
  Name:"Shubham Dhygude",
  Role:"Software Engineer",
  Rating:"⭐ ⭐ ⭐ ⭐ ",
  Avatar:"assets/Images/shubham.jpg"


} 

  ]

 
  constructor(private http: HttpClient) { }
  
  public login(data:any):Observable<object>
  {
      return this.http.post('https://reqres.in/api/login',data)
  }
  public signup(data:any):Observable<object>
  {
    return this.http.post('https://reqres.in/api/register',data)
  }
  

 
  public  loggedIn()
   {
     
    return !sessionStorage.getItem('token')
   }
}
