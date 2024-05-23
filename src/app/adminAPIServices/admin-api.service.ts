import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAPIService {

  server_url:string = "https://user-portal-server-e0s5.onrender.com"
  constructor(private http:HttpClient,private router:Router) { }

  authenticateAPI(email:string,password:string){
    return this.http.get(`${this.server_url}/users/1`).subscribe((result:any)=>{
      if(result.email==email && result.password==password){
        sessionStorage.setItem("adminDetails",JSON.stringify(result))
          alert("Login Sucessful")
          this.router.navigateByUrl('dashboard')
          this
      }else{
        alert("Invalid Email / Password")
      }
    })
  }

  getAdminDetails(){
    return this.http.get(`${this.server_url}/users/1`)  }

    
  updateAdminDetails(adminDetails:any){
    return this.http.put(`${this.server_url}/users/1`,adminDetails)  }

    isAuthorized(){
      return !!sessionStorage.getItem("adminDetails")
    }
}
