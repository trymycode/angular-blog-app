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
  public authtoken:string = '?authToken=ZGYzNGQxY2RhZGJjMjM2ZTQ1ZDUwNTE4M2UyYmE3ZGFhN2VkOTYyZmU4N2Q5NWY0MmQ0ZGNmNDNhODdhODI4ZWYyOTI5NTJhMDhiODU4YmY5ZjRlZDkzZWQ0ZGUxMDhmMDU4YmI0N2ZjZmI2MDFhOTdjOTdjNmE3NzUxYzZhZTU0MTQz';

constructor( private _http: HttpClient) {
  console.log("constructor of Blog-http service was called");
 }
//  method to return allblogs;
public getAllBlogs() {
 let myResponse = this._http.get(this.baseUrl+'/all'+ this.authtoken);
 console.log(myResponse);
 return myResponse.pipe(catchError(this.errorHandler))
 
}
errorHandler(error: HttpErrorResponse){
   console.log(error.message);
  return throwError(error.message);
 
}
// method to get a particular blog
public getSingleBlogInformation(currentBlogId):any{
  let myResponse = this._http.get(this.baseUrl+'/view'+ '/'+ currentBlogId + this.authtoken);
  return myResponse;
}
 public createBlog(blogData):any {
    let myResponse= this._http.post( this.baseUrl + '/create' + this.authtoken ,blogData);
    return myResponse;
 }
 public deleteBlog(blogId):any {
   let data = {};
   let myResponse = this._http.post(this.baseUrl + '/'+ blogId  + '/delete' + this.authtoken, data );
   return myResponse;
}
public editBlog(blogId, blogData):any{
  let myResponse = this._http.put(this.baseUrl+'/'+ blogId  + '/edit' + this.authtoken, blogData);
  return myResponse;
}

}