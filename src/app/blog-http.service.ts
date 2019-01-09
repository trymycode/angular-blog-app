import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlogs;
  public baseUrl:string = 'https://blogapp.edwisor.com/api/v1/blogs';

constructor( private _http: HttpClient) {
  console.log("constructor of Blog-http service was called");
 }
//  method to return allblogs;
public getAllBlogs() {
 let myResponse = this._http.get(this.baseUrl+'/all'+'?authToken=ZGYzNGQxY2RhZGJjMjM2ZTQ1ZDUwNTE4M2UyYmE3ZGFhN2VkOTYyZmU4N2Q5NWY0MmQ0ZGNmNDNhODdhODI4ZWYyOTI5NTJhMDhiODU4YmY5ZjRlZDkzZWQ0ZGUxMDhmMDU4YmI0N2ZjZmI2MDFhOTdjOTdjNmE3NzUxYzZhZTU0MTQz');
 console.log(myResponse);
 return myResponse.pipe(catchError(this.errorHandler))
 
}
errorHandler(error: HttpErrorResponse){
  return throwError(error);
}
// method to get a particular blog
public getSingleBlogInformation(currentBlogId):any{
  let myResponse = this._http.get(this.baseUrl+'/view'+ '/'+ currentBlogId +'?authToken=ZGYzNGQxY2RhZGJjMjM2ZTQ1ZDUwNTE4M2UyYmE3ZGFhN2VkOTYyZmU4N2Q5NWY0MmQ0ZGNmNDNhODdhODI4ZWYyOTI5NTJhMDhiODU4YmY5ZjRlZDkzZWQ0ZGUxMDhmMDU4YmI0N2ZjZmI2MDFhOTdjOTdjNmE3NzUxYzZhZTU0MTQz');
  return myResponse;
}
}