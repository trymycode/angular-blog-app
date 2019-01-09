import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from './../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  
  constructor( private _route: ActivatedRoute, private router: Router,public blogService: BlogService, public blogHttpService: BlogHttpService, private location: Location) { }

  ngOnInit() {
    
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        console.log(data);
        this.currentBlog= data["data"];
      },
      error =>{
        console.log("Some error occured");
        console.log("Error!"+ error);
      }
    )
    
  }
  public deleteThisBlog(){
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
        console.log("Blog deleted");
        console.log(data);
        alert("Blog deleted successfully!");
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000);
      },
      error => {
        console.log("Some error occured");
        console.log(error);
        alert("Some error occured");
      }
    )
 } 
 public previousPage():any{
  this.location.back();
 }
 
}
