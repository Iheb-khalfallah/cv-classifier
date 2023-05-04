import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  
    constructor(private httpClient : HttpClient) { }

  registerUser(registrationData: any): Observable<any> {
    return this.httpClient.post("http://localhost:8085/register", registrationData);
  }
  loginUser(email:String,password:String):Observable<any>{
    return this.httpClient.get("http://localhost:8085/login?email=" + email + "&password=" + password)
  }
  }

